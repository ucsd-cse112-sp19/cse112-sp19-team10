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
        Default: ['#F7BA2A', '#F7BA2A', '#F7BA2A']
    */

    it('color format 1', async () => {
      await showroom.setAttribute('colors', '[#F7BA2A, #F7BA2A, #F7BA2A]')
      const att = await showroom.hasAttribute('colors')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('colors')
      assert.deepEqual(val, '[#F7BA2A, #F7BA2A, #F7BA2A]')
    })

    it('color format 2', async () => {
      await showroom.setAttribute('colors', '[red,yellow,green]')
      const att = await showroom.hasAttribute('colors')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('colors')
      assert.deepEqual(val, '[red,yellow,green]')
    })
  })

  context('Testing core-rate attribute: disabled', async () => {
    /*  Unit Testing for
        Attribute: disabled
        Description: displays whether or not rate is read-only
        Type: boolean
        Default: false
    */

    it('disabled', async () => {
      await showroom.setAttribute('disabled', '')
      const att = await showroom.hasAttribute('disabled')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled')
      assert.deepEqual(val, '')
    })
  })

  context('Testing core-rate attribute: disabled-void-color', async () => {
    /*  Unit Testing for
        Attribute: disabled-void-color
        Description: color of unselected read-only icons
        Type: string
        Default: #EFF2F7
    */

    it('color format 1', async () => {
      await showroom.setAttribute('disabled-void-color', '#4286f4')
      const att = await showroom.hasAttribute('disabled-void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled-void-color')
      assert.deepEqual(val, '#4286f4')
    })

    it('color format 2', async () => {
      await showroom.setAttribute('disabled-void-color', 'green')
      const att = await showroom.hasAttribute('disabled-void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled-void-color')
      assert.deepEqual(val, 'green')
    })
  })

  context('Testing core-rate attribute: disabled-void-icon-class', async () => {
    /*  Unit Testing for
        Attribute: disabled-void-icon-class
        Description: class name of unselected icons
        Type: string
        Default: el-icon-star-off
    */

    it('string', async () => {
      await showroom.setAttribute('disabled-void-icon-class', 'el-icon-star-on')
      const att = await showroom.hasAttribute('disabled-void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('disabled-void-icon-class')
      assert.deepEqual(val, 'el-icon-star-on')
    })
  })

  context('Testing core-rate attribute: high-threshold', async () => {
    /*  Unit Testing for
        Attribute: high-threshold
        Description: threshold value between medium and high level
        Type: number
        Default: 4
    */

    it('number', async () => {
      await showroom.setAttribute('high-threshold', '4')
      const att = await showroom.hasAttribute('high-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('high-threshold')
      assert.deepEqual(val, '4')
    })
  })

  context('Testing core-rate attribute: low-threshold', async () => {
    /*  Unit Testing for
        Attribute: low-threshold
        Description: threshold value between low and medium level
        Type: number
        Default: 2
    */

    it('number', async () => {
      await showroom.setAttribute('low-threshold', '2')
      const att = await showroom.hasAttribute('low-threshold')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('low-threshold')
      assert.deepEqual(val, '2')
    })
  })

  context('Testing core-rate attribute: icon-classes', async () => {
    /*  Unit Testing for
        Attribute: icon-classes
        Description: an array of class name of icons. It should be three elements.
        Type: array
        Default: 2
    */

    it('string', async () => {
      await showroom.setAttribute('icon-classes', 'el-icon-star-on')
      const att = await showroom.hasAttribute('icon-classes')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('icon-classes')
      assert.deepEqual(val, 'el-icon-star-on')
    })
  })

  context('Testing core-rate attribute: score-template', async () => {
    /*  Unit Testing for
        Attribute: score-template
        Description: score templated used when show-score attribute is set
        Type: string
        Default: {value}
    */

    it('format', async () => {
      await showroom.setAttribute('score-template', ' points')
      const att = await showroom.hasAttribute('score-template')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('score-template')
      assert.deepEqual(val, ' points')
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

    it('show score', async () => {
      await showroom.setAttribute('show-score', '')
      const att = await showroom.hasAttribute('show-score')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('show-score')
      assert.deepEqual(val, '')
    })
  })

  context('Testing core-rate attribute: show-text', async () => {
    /*  Unit Testing for
        Attribute: show-text
        Description: determines whether or not to display texts
        Type: boolean
        Default: false
    */

    it('show text', async () => {
      await showroom.setAttribute('show-text', '')
      const att = await showroom.hasAttribute('show-text')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('show-text')
      assert.deepEqual(val, '')
    })
  })

  context('Testing core-rate attribute: text-color', async () => {
    /*  Unit Testing for
        Attribute: text-color
        Description: color of texts when show-text attribute is set
        Type: string
        Default: #1F2D3D
    */

    it('color format 1', async () => {
      await showroom.setAttribute('text-color', '#1F2D3D')
      const att = await showroom.hasAttribute('text-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('text-color')
      assert.deepEqual(val, '#1F2D3D')
    })

    it('color format 2', async () => {
      await showroom.setAttribute('text-color', 'yellow')
      const att = await showroom.hasAttribute('text-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('text-color')
      assert.deepEqual(val, 'yellow')
    })
  })

  context('Testing core-rate attribute: texts', async () => {
    /*  Unit Testing for
        Attribute: texts
        Description: text array set for each icon
        Type: array
        Default: ['oops', 'disappointed', 'normal', 'good', 'great']
    */

    it('array/object', async () => {
      await showroom.setAttribute('texts', "['oops', 'disappointed', 'normal', 'good', 'great']")
      const att = await showroom.hasAttribute('texts')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('texts')
      assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
    })
  })

  context('Testing core-rate attribute: v-model', async () => {
    /*  Unit Testing for
        Attribute: v-model
        Description: the binding value of the number of icons that are selected
        Type: number
        Default: 0
    */

    it('number', async () => {
      await showroom.setAttribute('v-model', '2')
      const att = await showroom.hasAttribute('v-model')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('v-model')
      assert.deepEqual(val, '2')
    })
  })

  context('Testing core-rate attribute: void-color', async () => {
    /*  Unit Testing for
        Attribute: void-color
        Description: color of unselected icons
        Type: string
        Default: #C6D1DE
    */

    it('color format 1', async () => {
      await showroom.setAttribute('void-color', '#C6D1DE')
      const att = await showroom.hasAttribute('void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('void-color')
      assert.deepEqual(val, '#C6D1DE')
    })

    it('color format 2', async () => {
      await showroom.setAttribute('void-color', 'green')
      const att = await showroom.hasAttribute('void-color')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('void-color')
      assert.deepEqual(val, 'green')
    })
  })

  context('Testing core-rate attribute: void-icon-class', async () => {
    /*  Unit Testing for
        Attribute: void-icon-class
        Description: class name of unselected icons
        Type: string
        Default: el-icon-star-off
    */

    it('string', async () => {
      await showroom.setAttribute('void-icon-class', 'el-icon-star-off')
      const att = await showroom.hasAttribute('void-icon-class')
      assert.deepEqual(att, true)
      const val = await showroom.getAttribute('void-icon-class')
      assert.deepEqual(val, 'el-icon-star-off')
    })
  })
})
