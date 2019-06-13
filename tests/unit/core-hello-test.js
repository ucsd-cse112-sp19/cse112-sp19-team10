const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()
const coverage = require('../Utils/coverage.js')

describe('core-hello', async => {
  before(async () => {
    await showroom.start()
    return coverage.beforeHook(showroom)
    // starts showroom server
  })

  after(async () => {
    console.log('Shutting down')
    return coverage.afterHook(showroom)
    // // stops the showroom server
  })

  beforeEach(async () => {
    await showroom.setTestSubject('core-hello')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  it('should display Hello World default setting', async () => {
    const lang = await showroom.getAttribute('lang')
    assert.deepEqual(lang, 'en')
    const helloEl = await showroom.find('// h1')
    const text = await showroom.getTextContent(helloEl)
    assert.deepEqual(text, 'Hello World ')
  })

  context('Testing lang attribute mapping Property -> Attribute', async () => {
    it('should display Hello World in Spanish: Hola Mundo', async () => {
      await showroom.setProperty('lang', 'es')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'es')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hola Mundo ')
    })

    it('should display Hello World in Korean: 안녕하세요 세계', async () => {
      await showroom.setProperty('lang', 'ko')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'ko')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, '안녕하세요 세계 ')
    })

    it('should display Hello World in German: Hallo Welt', async () => {
      await showroom.setProperty('lang', 'ge')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'ge')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hallo Welt ')
    })

    it('should display Hello World Thomas', async () => {
      await showroom.setProperty('lang', 'en')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'en')
      await showroom.setProperty('innerHTML', 'Thomas')
      const txt = await showroom.getProperty('innerHTML')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hello World ')
      assert.deepEqual(txt, 'Thomas')
    })
  })

  context('Testing lang attribute mapping Attribute -> Property', async () => {
    it('should display Hello World in Spanish: Hola Mundo', async () => {
      await showroom.setAttribute('lang', 'es')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'es')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hola Mundo ')
    })

    it('should display Hello World in Korean: 안녕하세요 세계', async () => {
      await showroom.setAttribute('lang', 'ko')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'ko')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, '안녕하세요 세계 ')
    })

    it('should display Hello World in German: Hallo Welt', async () => {
      await showroom.setAttribute('lang', 'ge')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'ge')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hallo Welt ')
    })

    it('should display Hello World Thomas', async () => {
      await showroom.setAttribute('lang', 'en')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'en')
      await showroom.setProperty('innerHTML', 'Thomas')
      const txt = await showroom.getProperty('innerHTML')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hello World ')
      assert.deepEqual(txt, 'Thomas')
    })
  })

  context('Testing rainbow attribute', async () => {
    it('Testing mapping Attribute -> Property with boolean', async () => {
      await showroom.setAttribute('rainbow', true)
      const rainbow = await showroom.hasAttribute('rainbow')
      assert.deepEqual(rainbow, true)
      const prop = await showroom.getProperty('rainbow')
      assert.deepEqual(prop, true)
    })

    it('Testing mapping Attribute -> Property with empty string', async () => {
      await showroom.setAttribute('rainbow', '')
      const rainbow = await showroom.hasAttribute('rainbow')
      assert.deepEqual(rainbow, true)
      const prop = await showroom.getProperty('rainbow')
      assert.deepEqual(prop, true)
    })

    // it('Testing mapping Property -> Attribute with boolean', async () => {
    //   await showroom.setProperty('rainbow', true)
    //   const rainbow = await showroom.hasAttribute('rainbow')
    //   assert.deepEqual(rainbow, true)
    //   const prop = await showroom.getAttribute('rainbow')
    //   assert.deepEqual(prop, true)
    // })

    // it('Testing mapping Property -> Attribute with empty string', async () => {
    //   await showroom.setProperty('rainbow', '')
    //   const rainbow = await showroom.hasAttribute('rainbow')
    //   assert.deepEqual(rainbow, true)
    //   const prop = await showroom.getAttribute('rainbow')
    //   assert.deepEqual(prop, true)
    // })
  })
})
