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
    it('disabled', async () => {
        await showroom.setAttribute('disabled', '')
        const att = await showroom.hasAttribute('disabled')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('disabled')
        assert.deepEqual(val, '')
    })
  })

  context('Testing core-rate attribute: disabled-void-color', async () => {
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
    it('string', async () => {
        await showroom.setAttribute('disabled-void-icon-class', 'el-icon-star-on')
        const att = await showroom.hasAttribute('disabled-void-icon-class')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('disabled-void-icon-class')
        assert.deepEqual(val, 'el-icon-star-on')
      })          
  })

  context('Testing core-rate attribute: high-threshold', async () => {
    it('number', async () => {
        await showroom.setAttribute('high-threshold', '4')
        const att = await showroom.hasAttribute('high-threshold')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('high-threshold')
        assert.deepEqual(val, '4')
    })
  })

  context('Testing core-rate attribute: low-threshold', async () => {
    it('number', async () => {
        await showroom.setAttribute('low-threshold', '2')
        const att = await showroom.hasAttribute('low-threshold')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('low-threshold')
        assert.deepEqual(val, '2')
    })      
  })

  context('Testing core-rate attribute: icon-classes', async () => {
    it('string', async () => {
        await showroom.setAttribute('icon-classes', 'el-icon-star-on')
        const att = await showroom.hasAttribute('icon-classes')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('icon-classes')
        assert.deepEqual(val, 'el-icon-star-on')
    })
  })

  context('Testing core-rate attribute: score-template', async () => {
    it('format', async () => {
        await showroom.setAttribute('score-template', ' points')
        const att = await showroom.hasAttribute('score-template')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('score-template')
        assert.deepEqual(val, ' points')
    })      
  })

  context('Testing core-rate attribute: show-score', async () => {
    it('show score', async () => {
        await showroom.setAttribute('show-score', '')
        const att = await showroom.hasAttribute('show-score')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('show-score')
        assert.deepEqual(val, '')
    })      
  })

  context('Testing core-rate attribute: show-text', async () => {
    it('show text', async () => {
        await showroom.setAttribute('show-text', '')
        const att = await showroom.hasAttribute('show-text')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('show-text')
        assert.deepEqual(val, '')
    })      
  })

  context('Testing core-rate attribute: text-color', async () => {
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
    it('array/object', async () => {
        await showroom.setAttribute('texts', "['oops', 'disappointed', 'normal', 'good', 'great']")
        const att = await showroom.hasAttribute('texts')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('texts')
        assert.deepEqual(val, "['oops', 'disappointed', 'normal', 'good', 'great']")
    })      
  })

  context('Testing core-rate attribute: v-model', async () => {
    it('number', async () => {
        await showroom.setAttribute('v-model', '2')
        const att = await showroom.hasAttribute('v-model')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('v-model')
        assert.deepEqual(val, '2')
    })      
  })

  context('Testing core-rate attribute: void-color', async () => {
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
    it('string', async () => {
        await showroom.setAttribute('void-icon-class', 'el-icon-star-off')
        const att = await showroom.hasAttribute('void-icon-class')
        assert.deepEqual(att, true)
        const val = await showroom.getAttribute('void-icon-class')
        assert.deepEqual(val, 'el-icon-star-off')
    })      
  })
})
