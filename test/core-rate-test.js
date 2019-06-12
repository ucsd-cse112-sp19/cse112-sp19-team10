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

  context('Testing core-rate attribute: colors', async () => {
    /*  Unit Testing for
        Attribute: colors
        Description: colors of icons. it should be an array containing three color elements
        Type: array
        Default: ['#f7ba2a', '#f7ba2a', '#f7ba2a']
    */

    it('color format 1, set property first then check if attribute updated', async () => {
      await showroom.setProperty('colors', '[#2ed3ce,#2ed3ce,#2ed3ce]')
      const att = await showroom.hasAttribute('colors')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('colors')
      assert.deepEqual(val, '[#2ed3ce,#2ed3ce,#2ed3ce]')
    })

    it('color format 2, set attribute first then check if property updated', async () => {
      await showroom.setAttribute('colors', '[red,yellow,green]')
      const att = await showroom.hasAttribute('colors')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('colors')
      assert.deepEqual(val, '[red,yellow,green]')
    })
    /*
    it('default value is set, if invalid array length', async () => {
      await showroom.setAttribute('colors', "[#F7BA2A, #F7BA2A]")
      const att = await showroom.hasAttribute('colors')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('colors')
      assert.deepEqual(val, "[#f7ba2a, #f7ba2a, #f7ba2a]")
    })

    it('default value is set, if non-array type', async () => {
      await showroom.setAttribute('colors', false)
      const att = await showroom.hasAttribute('colors')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('colors')
      assert.deepEqual(val, "[#f7ba2a, #f7ba2a, #f7ba2a]")
    })
  */
  })

  context('Testing core-rate attribute: disabled', async () => {
    /*  Unit Testing for
        Attribute: disabled
        Description: displays whether or not rate is read-only
        Type: boolean
        Default: false
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('disabled', true)
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('disabled', false)
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, false)
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('disabled', '')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })

    it('set default value, if non-boolean type', async () => {
      await showroom.setProperty('disabled', 'test')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabled')
      assert.deepEqual(val, true)
    })
  })

  context('Testing core-rate attribute: disabled-void-color', async () => {
    /*  Unit Testing for
        Attribute: disabled-void-color
        Description: color of unselected read-only icons
        Type: string
        Default: #EFF2F7
    */

    it('color format 1, set property first then check if attribute updated', async () => {
      await showroom.setProperty('disabledVoidColor', '#4286f4')
      const att = await showroom.hasAttribute('disabled-void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled-void-color')
      assert.deepEqual(val, '#4286f4')
    })

    it('color format 2, set attribute first then check if property updated', async () => {
      await showroom.setAttribute('disabled-void-color', 'green')
      const att = await showroom.hasAttribute('disabled-void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabledVoidColor')
      assert.deepEqual(val, 'green')
    })
  /*
    it('set default value, non color format type', async () => {
      await showroom.setAttribute('disabled-void-color', true)
      const att = await showroom.hasAttribute('disabled-void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabledVoidColor')
      assert.deepEqual(val, "#EFF2F7")
    })
  */
  })

  context('Testing core-rate attribute: disabled-void-icon-class', async () => {
    /*  Unit Testing for
        Attribute: disabled-void-icon-class
        Description: class name of unselected icons
        Type: string
        Default: fas fa-ban
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('disabledVoidIconClass', 'el-icon-star-off')
      const att = await showroom.hasAttribute('disabled-void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled-void-icon-class')
      assert.deepEqual(val, 'el-icon-star-off')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('disabled-void-icon-class', 'el-icon-star-off')
      const att = await showroom.hasAttribute('disabled-void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabledVoidIconClass')
      assert.deepEqual(val, 'el-icon-star-off')
    })
    /*
    it('non-string type, will convert to string', async () => {
      await showroom.setAttribute('disabled-void-icon-class', true)
      const att = await showroom.hasAttribute('disabled-void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('disabledVoidIconClass')
      assert.deepEqual(val, 'fas fa-ban')
    })
*/
  })

  context('Testing core-rate attribute: high-threshold', async () => {
    /*  Unit Testing for
        Attribute: high-threshold
        Description: threshold value between medium and high level
        Type: number
        Default: 4
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('highThreshold', 3)
      const att = await showroom.hasAttribute('high-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('high-threshold')
      assert.deepEqual(val, '3')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('high-threshold', 3)
      const att = await showroom.hasAttribute('high-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('highThreshold')
      assert.deepEqual(val, '3')
    })
    /*
    it('set default value, if not in range (low-threshold,5]', async () => {
      await showroom.setAttribute('high-threshold', 6)
      const att = await showroom.hasAttribute('high-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('highThreshold')
      assert.deepEqual(val, '4')

      await showroom.setAttribute('low-threshold', 1)
      await showroom.setAttribute('high-threshold', 1)
      const att2 = await showroom.hasAttribute('high-threshold')
      assert.deepEqual(att2, true)
      const val2 = await showroom.getProperty('highThreshold')
      assert.deepEqual(val2, '4')
    })

    it('set default value, if non-number type', async () => {
      await showroom.setAttribute('high-threshold', 'test')
      const att = await showroom.hasAttribute('high-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('highThreshold')
      assert.deepEqual(val, '4')
    })
  */
  })

  context('Testing core-rate attribute: low-threshold', async () => {
    /*  Unit Testing for
        Attribute: low-threshold
        Description: threshold value between low and medium level
        Type: number
        Default: 2
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('lowThreshold', 2)
      const att = await showroom.hasAttribute('low-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('low-threshold')
      assert.deepEqual(val, '2')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('low-threshold', 2)
      const att = await showroom.hasAttribute('low-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('lowThreshold')
      assert.deepEqual(val, '2')
    })
    /*
    it('set default value, if not in range [0,high-threshold)', async () => {
      await showroom.setAttribute('low-threshold', -1)
      const att = await showroom.hasAttribute('low-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('lowThreshold')
      assert.deepEqual(val, '2')

      await showroom.setAttribute('high-threshold', 3)
      await showroom.setAttribute('low-threshold', 3)
      const att2 = await showroom.hasAttribute('low-threshold')
      assert.deepEqual(att2, true)
      const val2 = await showroom.getProperty('lowThreshold')
      assert.deepEqual(val2, '2')
    })

    it('set default value, if non-number type', async () => {
      await showroom.setAttribute('low-threshold', 'test')
      const att = await showroom.hasAttribute('low-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('lowThreshold')
      assert.deepEqual(val, '2')
    })
*/
  })

  context('Testing core-rate attribute: icon-classes', async () => {
    /*  Unit Testing for
        Attribute: icon-classes
        Description: an array of class name of icons. It should be three elements.
        Type: string
        Default: fas fa-star
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('iconClasses', 'el-icon-star-on')
      const att = await showroom.hasAttribute('icon-classes')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('icon-classes')
      assert.deepEqual(val, 'el-icon-star-on')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('icon-classes', 'el-icon-star-on')
      const att = await showroom.hasAttribute('icon-classes')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('iconClasses')
      assert.deepEqual(val, 'el-icon-star-on')
    })

    it('non-string type, will convert to string', async () => {
      await showroom.setAttribute('icon-classes', true)
      const att = await showroom.hasAttribute('icon-classes')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('iconClasses')
      assert.deepEqual(val, 'true')
    })
  })

  context('Testing core-rate attribute: score-template', async () => {
    /*  Unit Testing for
        Attribute: score-template
        Description: score templated used when show-score attribute is set
        Type: string
        Default: ' points'
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('scoreTemplate', ' stars')
      const att = await showroom.hasAttribute('score-template')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('score-template')
      assert.deepEqual(val, ' stars')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('score-template', ' stars')
      const att = await showroom.hasAttribute('score-template')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('scoreTemplate')
      assert.deepEqual(val, ' stars')
    })

    it('set property first then check if attribute updated', async () => {
      await showroom.setAttribute('score-template', true)
      const att = await showroom.hasAttribute('score-template')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('scoreTemplate')
      assert.deepEqual(val, 'true')
    })
  })

  context('Testing core-rate attribute: show-score', async () => {
    /*  Unit Testing for
        Attribute: show-score
        Description: determines whether or not to display current score. show-text
                     and show-score cannot be true at the same time.
        Type: boolean
        Default: false
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('showScore', true)
      const att = await showroom.hasAttribute('show-score')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('show-score')
      assert.deepEqual(val, '')
    })

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('showScore', false)
      const att = await showroom.hasAttribute('show-score')
      assert.deepEqual(att, false)
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('show-score', '')
      const att = await showroom.hasAttribute('show-score')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('showScore')
      assert.deepEqual(val, true)
    })

    it('set default value, if non-boolean type', async () => {
      await showroom.setProperty('showScore', 'test')
      const att = await showroom.hasAttribute('show-score')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('showScore')
      assert.deepEqual(val, true)
    })
  })

  context('Testing core-rate attribute: show-text', async () => {
    /*  Unit Testing for
        Attribute: show-text
        Description: determines whether or not to display texts
        Type: boolean
        Default: false
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('showText', true)
      const att = await showroom.hasAttribute('show-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('show-text')
      assert.deepEqual(val, '')
    })

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('showText', false)
      const att = await showroom.hasAttribute('show-text')
      assert.deepEqual(att, false)
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('show-text', '')
      const att = await showroom.hasAttribute('show-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('showText')
      assert.deepEqual(val, true)
    })

    it('set default value, if non-boolean type', async () => {
      await showroom.setProperty('showText', 'test')
      const att = await showroom.hasAttribute('show-text')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('showText')
      assert.deepEqual(val, true)
    })
  })

  context('Testing core-rate attribute: text-color', async () => {
    /*  Unit Testing for
        Attribute: text-color
        Description: color of texts when show-text attribute is set
        Type: string
        Default: #1F2D3D
    */

    it('color format 1, set property first then check if attribute updated', async () => {
      await showroom.setProperty('textColor', '#4286f4')
      const att = await showroom.hasAttribute('text-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('text-color')
      assert.deepEqual(val, '#4286f4')
    })

    it('color format 2, set attribute first then check if property updated', async () => {
      await showroom.setAttribute('text-color', 'green')
      const att = await showroom.hasAttribute('text-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('textColor')
      assert.deepEqual(val, 'green')
    })
    /*
    it('set default value, non color format type', async () => {
      await showroom.setAttribute('text-color', false)
      const att = await showroom.hasAttribute('text-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('textColor')
      assert.deepEqual(val, "#1F2D3D")
    })
*/
  })

  context('Testing core-rate attribute: texts', async () => {
    /*  Unit Testing for
        Attribute: texts
        Description: text array set for each icon
        Type: array
        Default: ['oops', 'disappointed', 'normal', 'good', 'great']
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('texts', "['oops', 'disappointed', 'normal', 'good', 'great']")
      const att = await showroom.hasAttribute('texts')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('texts')
      assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('texts', "['oops', 'disappointed', 'normal', 'good', 'great']")
      const att = await showroom.hasAttribute('texts')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('texts')
      assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
    })
    /*
    it('set default value, if incorrect array length', async () => {
      await showroom.setAttribute('texts', "['normal', 'good', 'great']")
      const att = await showroom.hasAttribute('texts')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('texts')
      assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
    })

    it('set default value, if non-array type', async () => {
      await showroom.setAttribute('texts', true)
      const att = await showroom.hasAttribute('texts')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('texts')
      assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
    })
*/
  })

  context('Testing core-rate attribute: v-model', async () => {
    /*  Unit Testing for
        Attribute: v-model
        Description: the binding value of the number of icons that are selected
        Type: number
        Default: 0
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('vModel', '2')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '2')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('v-model', '2')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, '2')
    })
    /*
    it('set default value, if value is out of range', async () => {
      await showroom.setAttribute('v-model', -1)
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, '0')

      await showroom.setAttribute('v-model', 6)
      const att2 = await showroom.hasAttribute('v-model')
      assert.deepEqual(att2, true)
      const val2 = await showroom.getProperty('vModel')
      assert.deepEqual(val2, '0')
    })

    it('set default value, if value is non-number type', async () => {
      await showroom.setAttribute('v-model', true)
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('vModel')
      assert.deepEqual(val, '0')
    })
*/
  })

  context('Testing core-rate attribute: void-color', async () => {
    /*  Unit Testing for
        Attribute: void-color
        Description: color of unselected icons
        Type: string
        Default: #C6D1DE
    */

    it('color format 1, set property first then check if attribute updated', async () => {
      await showroom.setProperty('voidColor', '#4286f4')
      const att = await showroom.hasAttribute('void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('void-color')
      assert.deepEqual(val, '#4286f4')
    })

    it('color format 2, set attribute first then check if property updated', async () => {
      await showroom.setAttribute('void-color', 'green')
      const att = await showroom.hasAttribute('void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('voidColor')
      assert.deepEqual(val, 'green')
    })
    /*
    it('set default value, if non-color format type', async () => {
      await showroom.setAttribute('void-color', true)
      const att = await showroom.hasAttribute('void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('voidColor')
      assert.deepEqual(val, "#C6D1DE")
    })
*/
  })

  context('Testing core-rate attribute: void-icon-class', async () => {
    /*  Unit Testing for
        Attribute: void-icon-class
        Description: class name of unselected icons
        Type: string
        Default: fas fa-frown
    */

    it('set property first then check if attribute updated', async () => {
      await showroom.setProperty('voidIconClass', 'el-icon-star-on')
      const att = await showroom.hasAttribute('void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('void-icon-class')
      assert.deepEqual(val, 'el-icon-star-on')
    })

    it('set attribute first then check if property updated', async () => {
      await showroom.setAttribute('void-icon-class', 'el-icon-star-on')
      const att = await showroom.hasAttribute('void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('voidIconClass')
      assert.deepEqual(val, 'el-icon-star-on')
    })
    /*
    it('set default value, if non-string type', async () => {
      await showroom.setAttribute('void-icon-class', true)
      const att = await showroom.hasAttribute('void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getProperty('voidIconClass')
      assert.deepEqual(val, 'fas fa-frown')
    })
*/
  })
})
