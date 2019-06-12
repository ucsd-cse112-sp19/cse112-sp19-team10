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

    it('check for attribute with default string', async () => {
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, '#409EFF')
    })

    it('Mapping Property -> Attribute with hex code', async () => {
      // #790604 = cherry red
      await showroom.setProperty('activeColor', '#790604')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, '#790604')
    })

    it('Mapping Property -> Attribute with color name', async () => {
      await showroom.setProperty('activeColor', 'green')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, 'green')
    })

    it('Mapping Attribute -> Property with hex code', async () => {
      // #790604 = cherry red
      await showroom.setAttribute('active-color', '#790604')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeColor')
      assert.deepEqual(val, '#790604')
    })

    it('Mapping Attribute -> Property with color name', async () => {
      // #790604 = cherry red
      await showroom.setAttribute('active-color', 'blue')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeColor')
      assert.deepEqual(val, 'blue')
    })

    it('Mapping Property -> Attribute with invaild string', async () => {
      await showroom.setProperty('activeColor', 'bar')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-color')
      assert.deepEqual(val, '#409EFF')
    })

    it('Mapping Attribute -> Property with invaild string', async () => {
      await showroom.setAttribute('active-color', 'foo')
      const att = await showroom.hasAttribute('active-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeColor')
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

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('activeIconClass', 'fas fa-hamburger')
      const att = await showroom.hasAttribute('active-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-icon-class')
      assert.deepEqual(val, 'fas fa-hamburger')
    })

    it('Mapping Attribute -> Property with vaild string', async () => {
      await showroom.setAttribute('active-icon-class', 'fas fa-beer')
      const att = await showroom.hasAttribute('active-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeIconClass')
      assert.deepEqual(val, 'fas fa-beer')
    })
  })

  context('Testing core-switch attribute: active-text', async () => {
    /*  Unit Testing for
        Attribute: active-text
        Description: text displayed when in on state
        Type: string
        Default: N/A
    */

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('activeText', 'foo')
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-text')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('activeText', true)
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-text')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('activeText', 123)
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-text')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with vaild string', async () => {
      await showroom.setAttribute('active-text', 'bar')
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeText')
      assert.deepEqual(val, 'bar')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('active-text', false)
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeText')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('active-text', 456)
      const att = await showroom.hasAttribute('active-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeText')
      assert.deepEqual(val, '456')
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
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('activeValue', 'foo')
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      await showroom.setAttribute('active-value', 'bar')
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeValue')
      assert.deepEqual(val, 'bar')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('activeValue', true)
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('active-value', false)
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeValue')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('activeValue', 123)
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('active-value')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('active-value', 456)
      const att = await showroom.hasAttribute('active-value')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('activeValue')
      assert.deepEqual(val, '456')
    })

  })

  context('Testing core-switch attribute: disabled', async () => {
    /*  Unit Testing for
        Attribute: disabled
        Description: whether core-switch is disabled
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

  context('Testing core-switch attribute: inactive-color', async () => {
    /*  Unit Testing for
        Attribute: inactive-color
        Description: background color when in off state
        Type: string
        Default: #C0CCDA
    */

    it('check for attribute with default string', async () => {
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, '#C0CCDA')
    })

    it('Mapping Property -> Attribute with hex code', async () => {
      // #6699cc = grey blue
      await showroom.setProperty('inactiveColor', '#6699cc')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, '#6699cc')
    })

    it('Mapping Property -> Attribute with color name', async () => {
      await showroom.setProperty('inactiveColor', 'yellow')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, 'yellow')
    })

    it('Mapping Attribute -> Property with hex code', async () => {
      // #6699cc = grey blue
      await showroom.setAttribute('inactive-color', '#6699cc')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveColor')
      assert.deepEqual(val, '#6699cc')
    })

    it('Mapping Attribute -> Property with color name', async () => {
      await showroom.setAttribute('inactive-color', 'orange')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveColor')
      assert.deepEqual(val, 'orange')
    })

    it('Mapping Property -> Attribute with invaild string', async () => {
      await showroom.setProperty('inactiveColor', 'bar')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-color')
      assert.deepEqual(val, '#C0CCDA')
    })

    it('Mapping Attribute -> Property with invaild string', async () => {
      await showroom.setAttribute('inactive-color', 'foo')
      const att = await showroom.hasAttribute('inactive-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveColor')
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
    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('inactiveIconClass', 'fas fa-hamburger')
      const att = await showroom.hasAttribute('inactive-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-icon-class')
      assert.deepEqual(val, 'fas fa-hamburger')
    })

    it('Mapping Attribute -> Property with vaild string', async () => {
      await showroom.setAttribute('inactive-icon-class', 'fas fa-beer')
      const att = await showroom.hasAttribute('inactive-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveIconClass')
      assert.deepEqual(val, 'fas fa-beer')
    })
  })

  context('Testing core-switch attribute: inactive-text', async () => {
    /*  Unit Testing for
        Attribute: inactive-text
        Description: text displayed when in off state
        Type: string
        Default: N/A
    */

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('inactiveText', 'foo')
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-text')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('inactiveText', true)
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-text')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('inactiveText', 123)
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-text')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with vaild string', async () => {
      await showroom.setAttribute('inactive-text', 'bar')
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveText')
      assert.deepEqual(val, 'bar')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('inactive-text', false)
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveText')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('inactive-text', 456)
      const att = await showroom.hasAttribute('inactive-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveText')
      assert.deepEqual(val, '456')
    })
  })

  context('Testing core-switch attribute: inactive-value', async () => {
    /*  Unit Testing for
        Attribute: inactive-value
        Description: switch value when in off state
        Type: boolean/string/number
        Default: false
    */

    it('with default value', async () => {
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('inactiveValue', 'foo')
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Attribute -> Property with valid string', async () => {
      await showroom.setAttribute('inactive-value', 'bar')
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveValue')
      assert.deepEqual(val, 'bar')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('inactiveValue', true)
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('inactive-value', false)
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveValue')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('inactiveValue', 123)
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('inactive-value')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('inactive-value', 456)
      const att = await showroom.hasAttribute('inactive-value')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('inactiveValue')
      assert.deepEqual(val, '456')
    })
  })

  context('Testing core-switch attribute: name', async () => {
    /*  Unit Testing for
        Attribute: name
        Description: input name of core-switch
        Type: string
        Default: N/A
    */

    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('name', 'foo')
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('name')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('name', true)
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('name')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('name', 123)
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('name')
      assert.deepEqual(val, '123')
    })

    it('Mapping Attribute -> Property with vaild string', async () => {
      await showroom.setAttribute('name', 'bar')
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('name')
      assert.deepEqual(val, 'bar')
    })

    it('Mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('name', false)
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('name')
      assert.deepEqual(val, 'false')
    })

    it('Mapping Attribute -> Property with number', async () => {
      await showroom.setAttribute('name', 456)
      const att = await showroom.hasAttribute('name')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('name')
      assert.deepEqual(val, '456')
    })
  })

  context('Testing core-switch attribute: v-model', async () => {
    /*  Unit Testing for
        Attribute: v-model
        Description: binding value
        Type: boolean/ string/ number
        Default: false
    */
    
    it('check for attribute with default string', async () => {
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, 'false')
    })
    
    it('Mapping Property -> Attribute with valid string', async () => {
      await showroom.setProperty('vModel', 'foo')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, 'foo')
    })

    it('Mapping Property -> Attribute with boolean', async () => {
      await showroom.setProperty('vModel', true)
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, 'true')
    })

    it('Mapping Property -> Attribute with number', async () => {
      await showroom.setProperty('vModel', 123)
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '123')
    })

    // it('Mapping Attribute -> Property with vaild string', async () => {
    //   await showroom.setAttribute('v-model', 'bar')
    //   const att = await showroom.hasAttribute('v-model')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getProperty('vModel')
    //   assert.deepEqual(val, 'bar')
    // })

    // it('Mapping Attribute -> Property with boolean', async () => {
    //   await showroom.setAttribute('v-model', false)
    //   const att = await showroom.hasAttribute('v-model')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getProperty('vModel')
    //   assert.deepEqual(val, 'false')
    // })

    // it('Mapping Attribute -> Property with number', async () => {
    //   await showroom.setAttribute('v-model', 456)
    //   const att = await showroom.hasAttribute('v-model')
    //   assert.deepEqual(att, true)
    //   const val = await showroom.getProperty('vModel')
    //   assert.deepEqual(val, '456')
    // }) 
  })
})
