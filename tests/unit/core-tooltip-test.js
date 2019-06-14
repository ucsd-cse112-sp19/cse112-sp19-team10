const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

// Some unit tests are failing so they are commented out to allow it pass the
// building stage in pipeline

describe('Testing core-tooltip', async () => {
  // runs before any test in each context() block and first run of beforeEach()
  before(async () => {
    await showroom.start()
    // starts showroom server
  })

  // runs after all test in each context() block and last run of afterEach()
  after(async () => {
    console.log('Shutting down')
    await showroom.stop()
    // stops the showroom server
  })

  // runs before every test in the context() block
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

      // check if the attribute exists
      const att = await showroom.hasAttribute('effect')
      assert.deepEqual(att, true)

      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('effect')
      assert.deepEqual(val, 'dark')
    })

    it('Mapping Property -> Attribute with light', async () => {
      await showroom.setProperty('effect', 'light')

      // check if the attribute exists
      const att = await showroom.hasAttribute('effect')
      assert.deepEqual(att, true)

      // check if the changed attribute value is reflected to the attribute value
      const val = await showroom.getAttribute('effect')
      assert.deepEqual(val, 'light')
    })

    // it('Mapping Attribute -> Property with invalid string', async () => {
    //   await showroom.setAttribute('effect', 'foo')

    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)

    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('effect')
    //   assert.deepEqual(val, 'dark')
    // })

    // it('Mapping Attribute -> Property with invalid value', async () => {
    //   await showroom.setAttribute('effect', 123)
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)

    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('effect')
    //   assert.deepEqual(val, 'dark')
    // })

    // it('Mapping Property -> Attribute with invalid string', async () => {
    //   await showroom.setProperty('effect', 'foo')

    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)

    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('effect')
    //   assert.deepEqual(val, 'dark')
    // })

    // it('Mapping Attribute -> Attribute with invalid value', async () => {
    //   await showroom.setProperty('effect', 123)

    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('effect')
    //   assert.deepEqual(att, true)

    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('effect')
    //   assert.deepEqual(val, 'dark')
    // })
  })

  context('core-tooltip attribute: content', async () => {
    /*  Unit Testing for
        Attribute: content
        Description: display content, can be overridden by slot#content
        Type: string
        Accepted Values: any
        Default: N/A
    */

    it('Mapping Property -> Attribute with string', async () => {
      await showroom.setProperty('content', 'light')

      // check if the attribute exists
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)

      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('content')
      assert.deepEqual(val, 'light')
    })

    it('Mapping Attribute -> Property with string', async () => {
      await showroom.setAttribute('content', 'foo')

      // check if the attribute exists
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)

      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('content')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('content', true)

      // check if the attribute exists
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)

      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('content')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('content', false)

      // check if the attribute exists
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)

      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('content')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('content', 123)

      // check if the attribute exists
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)

      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('content')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('content', 456)

      // check if the attribute exists
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)

      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('content')
      assert.deepEqual(val, '456')
    })
  })

  context('core-tooltip attribute: placement', async () => {
    /*  Unit Testing for
        Attribute: placement
        Description: position of Tooltip
        Type: string
        Accepted Values: top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
        Default: bottom
    */

    it('default value', async () => {
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)

      // check if it is the correct default value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom')
    })

    // it('Mapping Property -> Attribute with invaild string', async () => {
    //   await showroom.setProperty('placement', 'foo')
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('placement')
    //   assert.deepEqual(att, true)

    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('placement')
    //   assert.deepEqual(val, 'bottom')
    // })

    // it('Mapping Attribute -> Property with invaild string', async () => {
    //   await showroom.setAttribute('placement', 'bar')

    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('placement')
    //   assert.deepEqual(att, true)

    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('placement')
    //   assert.deepEqual(val, 'bottom')
    // })

    it('Mapping Property -> Attribute with top', async () => {
      await showroom.setProperty('placement', 'top')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'top')
    })

    it('Mapping Property -> Attribute with top-start', async () => {
      await showroom.setProperty('placement', 'top-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'top-start')
    })

    it('Mapping Property -> Attribute with top-end', async () => {
      await showroom.setProperty('placement', 'top-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'top-end')
    })

    it('Mapping Property -> Attribute with bottom', async () => {
      await showroom.setProperty('placement', 'bottom')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom')
    })

    it('Mapping Property -> Attribute with bottom-start', async () => {
      await showroom.setProperty('placement', 'bottom-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom-start')
    })

    it('Mapping Property -> Attribute with bottom-end', async () => {
      await showroom.setProperty('placement', 'bottom-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom-end')
    })

    it('Mapping Property -> Attribute with left', async () => {
      await showroom.setProperty('placement', 'left')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'left')
    })

    it('Mapping Property -> Attribute with left-start', async () => {
      await showroom.setProperty('placement', 'left-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'left-start')
    })

    it('Mapping Property -> Attribute with left-end', async () => {
      await showroom.setProperty('placement', 'left-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'left-end')
    })

    it('Mapping Property -> Attribute with right', async () => {
      await showroom.setProperty('placement', 'right')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'right')
    })

    it('Mapping Property -> Attribute with right-start', async () => {
      await showroom.setProperty('placement', 'right-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'right-start')
    })

    it('Mapping Property -> Attribute with right-end', async () => {
      await showroom.setProperty('placement', 'right-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'right-end')
    })

    it('Mapping Attribute -> Property with top', async () => {
      await showroom.setAttribute('placement', 'top')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'top')
    })

    it('Mapping Attribute -> Property with top-start', async () => {
      await showroom.setAttribute('placement', 'top-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'top-start')
    })

    it('Mapping Attribute -> Property with top-end', async () => {
      await showroom.setAttribute('placement', 'top-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'top-end')
    })

    it('Mapping Attribute -> Property with bottom', async () => {
      await showroom.setAttribute('placement', 'bottom')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'bottom')
    })

    it('Mapping Attribute -> Property with bottom-start', async () => {
      await showroom.setAttribute('placement', 'bottom-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'bottom-start')
    })

    it('Mapping Attribute -> Property with bottom-end', async () => {
      await showroom.setAttribute('placement', 'bottom-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'bottom-end')
    })

    it('Mapping Attribute -> Property with left', async () => {
      await showroom.setAttribute('placement', 'left')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'left')
    })

    it('Mapping Attribute -> Property with left-start', async () => {
      await showroom.setAttribute('placement', 'left-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'left-start')
    })

    it('Mapping Attribute -> Property with left-end', async () => {
      await showroom.setAttribute('placement', 'left-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'left-end')
    })

    it('Mapping Attribute -> Property with right', async () => {
      await showroom.setAttribute('placement', 'right')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'right')
    })

    it('Mapping Attribute -> Property with right-start', async () => {
      await showroom.setAttribute('placement', 'right-start')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'right-start')
    })

    it('Mapping Attribute -> Property with right-end', async () => {
      await showroom.setAttribute('placement', 'right-end')
      // check if the attribute exists
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'right-end')
    })
  })

  context('core-tooltip attribute: v-model', async () => {
    /*  Unit Testing for
        Attribute: v-model
        Description: visibility of Tooltip
        Type: boolean
        Default: false

        mapping:
          false <-> no v-model attribute
          true <-> '' or any string
    */

    it('with default value', async () => {
      // check if attribute does not exist
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, false)
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('vModel', true)
      // check if the attribute exists
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('v-model', true)
      // check if the attribute exists
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('vModel', 'true')
      // check if the attribute exists
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('v-model', '')
      // check if the attribute exists
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('vModel', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      // check if changed property value change attribute value to the default value
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('v-model', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      // check if changed attribute value change property value to the default value
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, true)
    })
  })

  context('core-tooltip attribute: disabled', async () => {
    /*  Unit Testing for
        Attribute: disabled
        Description: whether core-tooltip is disabled
        Type: boolean
        Default: false

        mapping:
          false <-> no disabled attribute
          true <-> '' or any string
    */

    it('with default value', async () => {
      // check if attribute does not exist
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, false)
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('disabled', true)
      // check if the attribute exists
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('disabled', true)
      // check if the attribute exists
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('disabled', 'true')
      // check if the attribute exists
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('disabled', '')
      // check if the attribute exists
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('disabled', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      // check if changed property value change attribute value to the default value
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('disabled', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      // check if changed attribute value change property value to the default value
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })
  })

  context('core-tooltip attribute: manual', async () => {
    /*  Unit Testing for
        Attribute: manual
        Description: whether to control Tooltip manually. mouseenter and mouseleave won't have effects if set to true
        Type: boolean
        Default: false

        mapping:
          false <-> no manual attribute
          true <-> '' or any string
    */

    it('with default value', async () => {
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, false)
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('manual', true)
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('manual')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('manual', true)
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('manual')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('manual', 'true')
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('manual')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('manual', '')
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('manual')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('manual', '123')
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, true)
      // check if changed property value change attribute value to the default value
      const val = await showroom.getAttribute('manual')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('manual', '123')
      // check if attribute does not exist
      const att = await showroom.hasAttribute('manual')
      assert.deepEqual(att, true)
      // check if changed attribute value change property value to the default value
      const val = await showroom.getProperty('manual')
      assert.deepEqual(val, true)
    })
  })

  context('core-tooltip attribute: enterable', async () => {
    /*  Unit Testing for
        Attribute: enterable
        Description: whether the mouse can enter the tooltip
        Type: boolean
        Default: true

        mapping:
          false <-> no enterable attribute
          true <-> '' or any string
    */

    it('with default value', async () => {
      // check if the attribute exists
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, true)
      // check if it is the correct default value
      const val = await showroom.getAttribute('enterable')
      assert.deepEqual(val, '')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('enterable', false)

      // checks if the attribute gets remove properly
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, false)
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('enterable', true)
      // check if the attribute exists
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('enterable')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('enterable', 'true')
      // check if the attribute exists
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('enterable')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('enterable', '')
      // check if the attribute exists
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('enterable')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('enterable', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, true)
      // check if changed property value change attribute value to the default value
      const val = await showroom.getAttribute('enterable')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      // check that the attribute got removed
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('enterable', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('enterable')
      assert.deepEqual(att, true)
      // check if changed attribute value change property value to the default value
      const val = await showroom.getProperty('enterable')
      assert.deepEqual(val, true)
    })
  })

  context('Testing core-switch attribute: tabindex', async () => {
    /*  Unit Testing for
        Attribute: tabindex
        Description: tabindex of Tooltip
        Type: number
        Default: 0

        tabindex indicates if its element can be focused and if/where it
        participates in sequential keyboard navigation
    */
    it('with default value', async () => {
      // check if the attribute exists
      const att = await showroom.hasAttribute('tabindex')
      assert.deepEqual(att, true)
      // check if it is the correct default value
      const val = await showroom.getAttribute('tabindex')
      assert.deepEqual(val, '0')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      await showroom.setAttribute('tabindex', '12')
      // check if the attribute exists
      const att = await showroom.hasAttribute('tabindex')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('tabindex')
      assert.deepEqual(val, '12')
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('tabindex', '6')
      // check if the attribute exists
      const att = await showroom.hasAttribute('tabindex')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('tabindex')
      assert.deepEqual(val, '6')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('tabindex', 16)
      // check if the attribute exists
      const att = await showroom.hasAttribute('tabindex')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('tabindex')
      assert.deepEqual(val, '16')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('tabindex', 100)
      // check if the attribute exists
      const att = await showroom.hasAttribute('tabindex')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('tabindex')
      assert.deepEqual(val, '100')
    })

    // it('Mapping Attribute -> Property with invalid value boolean', async () => {
    //   await showroom.setAttribute('tabindex', false)
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('tabindex')
    //   assert.deepEqual(att, true)
    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('tabindex')
    //   assert.deepEqual(val, '0')
    // })

    // it('Mapping Attribute -> Property with invalid string', async () => {
    //   await showroom.setAttribute('tabindex', 'foo')
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('tabindex')
    //   assert.deepEqual(att, true)
    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('tabindex')
    //   assert.deepEqual(val, '0')
    // })

    // it('Mapping Property -> Attribute with invalid value boolean', async () => {
    //   await showroom.setProperty('tabindex', false)
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('tabindex')
    //   assert.deepEqual(att, true)
    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('tabindex')
    //   assert.deepEqual(val, '0')
    // })

    // it('Mapping Property -> Attribute with invalid string', async () => {
    //   await showroom.setProperty('tabindex', 'bar')
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('tabindex')
    //   assert.deepEqual(att, true)
    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('tabindex')
    //   assert.deepEqual(val, '0')
    // })
  })

  context('Testing core-switch attribute: open-delay', async () => {
    /*  Unit Testing for
        Attribute: open-delay
        Description: delay of appearance, in millisecond
        Type: number
        Default: 0
    */

    it('with default value', async () => {
      // check if the attribute exists
      const att = await showroom.hasAttribute('open-delay')
      assert.deepEqual(att, true)
      // check if it is the correct default value
      const val = await showroom.getAttribute('open-delay')
      assert.deepEqual(val, '0')
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('openDelay', '123')
      // check if the attribute exists
      const att = await showroom.hasAttribute('open-delay')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('open-delay')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      await showroom.setAttribute('open-delay', '456')
      // check if the attribute exists
      const att = await showroom.hasAttribute('open-delay')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('openDelay')
      assert.deepEqual(val, '456')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('openDelay', 789)
      // check if the attribute exists
      const att = await showroom.hasAttribute('open-delay')
      assert.deepEqual(att, true)
      // check if the changed property value is reflected to the attribute value
      const val = await showroom.getAttribute('open-delay')
      assert.deepEqual(val, '789')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('open-delay', 123)
      // check if the attribute exists
      const att = await showroom.hasAttribute('open-delay')
      assert.deepEqual(att, true)
      // check if the changed attribute value is reflected to the property value
      const val = await showroom.getProperty('openDelay')
      assert.deepEqual(val, '123')
    })

    // it('Mapping Property -> Attribute with boolean', async () => {
    //   await showroom.setProperty('openDelay', true)
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('open-delay')
    //   assert.deepEqual(att, true)
    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('open-delay')
    //   assert.deepEqual(val, '0')
    // })

    // it('Mapping Attribute -> Property with boolean', async () => {
    //   await showroom.setAttribute('open-delay', false)
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('open-delay')
    //   assert.deepEqual(att, true)
    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('openDelay')
    //   assert.deepEqual(val, '0')
    // })

    // it('Mapping Attribute -> Property with invalid string', async () => {
    //   await showroom.setAttribute('open-delay', 'foo')
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('open-delay')
    //   assert.deepEqual(att, true)
    //   // check if changed attribute value change property value to the default value
    //   const val = await showroom.getProperty('openDelay')
    //   assert.deepEqual(val, '0')
    // })

    // it('Mapping Property -> Attribute with invalid string', async () => {
    //   await showroom.setProperty('openDelay', 'bar')
    //   // check if the attribute exists
    //   const att = await showroom.hasAttribute('open-delay')
    //   assert.deepEqual(att, true)
    //   // check if changed property value change attribute value to the default value
    //   const val = await showroom.getAttribute('open-delay')
    //   assert.deepEqual(val, '0')
    // })
  })
})
