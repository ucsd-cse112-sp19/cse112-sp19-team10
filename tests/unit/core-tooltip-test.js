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
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('content')
      assert.deepEqual(val, 'light')
    })

    it('Mapping Attribute -> Property with string', async () => {
      await showroom.setAttribute('content', 'foo')
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('content')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('content', true)
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('content')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('content', false)
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('content')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('content', 123)
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('content')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('content', 456)
      const att = await showroom.hasAttribute('content')
      assert.deepEqual(att, true)
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
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom')
    })

    // it('Mapping Property -> Attribute with invaild string', async () => {
    //   await showroom.setProperty('placement', 'foo')
    //   const att = await showroom.hasAttribute('placement')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getAttribute('placement')
    //   assert.deepEqual(val, 'bottom')
    // })

    // it('Mapping Attribute -> Property with invaild string', async () => {
    //   await showroom.setAttribute('placement', 'bar')
    //   const att = await showroom.hasAttribute('placement')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getProperty('placement')
    //   assert.deepEqual(val, 'bottom')
    // })

    it('Mapping Property -> Attribute with top', async () => {
      await showroom.setProperty('placement', 'top')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'top')
    })

    it('Mapping Property -> Attribute with top-start', async () => {
      await showroom.setProperty('placement', 'top-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'top-start')
    })

    it('Mapping Property -> Attribute with top-end', async () => {
      await showroom.setProperty('placement', 'top-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'top-end')
    })

    it('Mapping Property -> Attribute with bottom', async () => {
      await showroom.setProperty('placement', 'bottom')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom')
    })

    it('Mapping Property -> Attribute with bottom-start', async () => {
      await showroom.setProperty('placement', 'bottom-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom-start')
    })

    it('Mapping Property -> Attribute with bottom-end', async () => {
      await showroom.setProperty('placement', 'bottom-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'bottom-end')
    })

    it('Mapping Property -> Attribute with left', async () => {
      await showroom.setProperty('placement', 'left')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'left')
    })

    it('Mapping Property -> Attribute with left-start', async () => {
      await showroom.setProperty('placement', 'left-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'left-start')
    })

    it('Mapping Property -> Attribute with left-end', async () => {
      await showroom.setProperty('placement', 'left-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'left-end')
    })

    it('Mapping Property -> Attribute with right', async () => {
      await showroom.setProperty('placement', 'right')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'right')
    })

    it('Mapping Property -> Attribute with right-start', async () => {
      await showroom.setProperty('placement', 'right-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'right-start')
    })

    it('Mapping Property -> Attribute with right-end', async () => {
      await showroom.setProperty('placement', 'right-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('placement')
      assert.deepEqual(val, 'right-end')
    })

    it('Mapping Attribute -> Property with top', async () => {
      await showroom.setAttribute('placement', 'top')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'top')
    })

    it('Mapping Attribute -> Property with top-start', async () => {
      await showroom.setAttribute('placement', 'top-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'top-start')
    })

    it('Mapping Attribute -> Property with top-end', async () => {
      await showroom.setAttribute('placement', 'top-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'top-end')
    })

    it('Mapping Attribute -> Property with bottom', async () => {
      await showroom.setAttribute('placement', 'bottom')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'bottom')
    })

    it('Mapping Attribute -> Property with bottom-start', async () => {
      await showroom.setAttribute('placement', 'bottom-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'bottom-start')
    })

    it('Mapping Attribute -> Property with bottom-end', async () => {
      await showroom.setAttribute('placement', 'bottom-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'bottom-end')
    })

    it('Mapping Attribute -> Property with left', async () => {
      await showroom.setAttribute('placement', 'left')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'left')
    })

    it('Mapping Attribute -> Property with left-start', async () => {
      await showroom.setAttribute('placement', 'left-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'left-start')
    })

    it('Mapping Attribute -> Property with left-end', async () => {
      await showroom.setAttribute('placement', 'left-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'left-end')
    })

    it('Mapping Attribute -> Property with right', async () => {
      await showroom.setAttribute('placement', 'right')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'right')
    })

    it('Mapping Attribute -> Property with right-start', async () => {
      await showroom.setAttribute('placement', 'right-start')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('placement')
      assert.deepEqual(val, 'right-start')
    })

    it('Mapping Attribute -> Property with right-end', async () => {
      await showroom.setAttribute('placement', 'right-end')
      const att = await showroom.hasAttribute('placement')
      assert.deepEqual(att, true)
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
          false <-> no disabled attribute
          true <-> '' or any string
    */

    it('with default value', async () => {
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, false)
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('vModel', true)
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('v-model', true)
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('vModel', 'true')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('v-model', '')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('vModel', '123')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('vModel', false)
      const ele = await showroom.hasAttribute('v-model')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('v-model', '123')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
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
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, false)
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('disabled', true)
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('disabled', false)
      const ele = await showroom.hasAttribute('disabled')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('disabled', true)
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('disabled', false)
      const ele = await showroom.hasAttribute('disabled')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('disabled', 'true')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('disabled', false)
      const ele = await showroom.hasAttribute('disabled')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('disabled', '')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })

    it('Mapping Property -> Attribute with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('disabled', false)
      const ele = await showroom.hasAttribute('disabled')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setProperty('disabled', '123')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('Mapping Attribute -> Property with invalid string', async () => {
      // remove the attribute to reset it
      await showroom.setProperty('disabled', false)
      const ele = await showroom.hasAttribute('disabled')
      assert.deepEqual(ele, false)

      // checking mapping
      await showroom.setAttribute('disabled', '123')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })
  })

})
