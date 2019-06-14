const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('core-hello', async => {
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
    await showroom.setTestSubject('core-hello')
    await showroom.page.waitFor(150)
    // select the component with defaults from the descriptor file
  })

  it('should display Hello World default setting', async () => {
    // check for lang default value
    const lang = await showroom.getAttribute('lang')
    assert.deepEqual(lang, 'en')

    // check if the text is in correct language
    const helloEl = await showroom.find('// h1')
    const text = await showroom.getTextContent(helloEl)
    assert.deepEqual(text, 'Hello World ')
  })

  // this test block checks if setting property value will change the attribute correctly
  context('Testing lang attribute mapping Property -> Attribute', async () => {
    it('should display Hello World in Spanish: Hola Mundo', async () => {
      // check for the correct lang value
      await showroom.setProperty('lang', 'es')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'es')

      // check if the text is in correct language
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hola Mundo ')
    })

    it('should display Hello World in Korean: 안녕하세요 세계', async () => {
      // check for the correct lang value
      await showroom.setProperty('lang', 'ko')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'ko')

      // check if the text is in correct language
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, '안녕하세요 세계 ')
    })

    it('should display Hello World in German: Hallo Welt', async () => {
      // check for the correct lang value
      await showroom.setProperty('lang', 'ge')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'ge')

      // check if the text is in correct language
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hallo Welt ')
    })

    it('should display Hello World Thomas', async () => {
      // check for the correct lang value
      await showroom.setProperty('lang', 'en')
      const lang = await showroom.getAttribute('lang')
      assert.deepEqual(lang, 'en')

      // check if the text is in correct language
      await showroom.setProperty('innerHTML', 'Thomas')
      const txt = await showroom.getProperty('innerHTML')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hello World ')

      // check if you can add more text after hello world
      assert.deepEqual(txt, 'Thomas')
    })
  })

  // this test block checks if setting attribute value will change property correctly
  context('Testing lang attribute mapping Attribute -> Property', async () => {
    it('should display Hello World in Spanish: Hola Mundo', async () => {
      // check for the correct lang value
      await showroom.setAttribute('lang', 'es')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'es')

      // check if the text is in correct language
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hola Mundo ')
    })

    it('should display Hello World in Korean: 안녕하세요 세계', async () => {
      // check for the correct lang value
      await showroom.setAttribute('lang', 'ko')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'ko')

      // check if the text is in correct language
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, '안녕하세요 세계 ')
    })

    it('should display Hello World in German: Hallo Welt', async () => {
      // check for the correct lang value
      await showroom.setAttribute('lang', 'ge')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'ge')

      // check if the text is in correct language
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hallo Welt ')
    })

    it('should display Hello World Thomas', async () => {
      // check for the correct lang value
      await showroom.setAttribute('lang', 'en')
      const lang = await showroom.getProperty('lang')
      assert.deepEqual(lang, 'en')

      // check if the text is in correct language
      await showroom.setProperty('innerHTML', 'Thomas')
      const txt = await showroom.getProperty('innerHTML')
      const helloEl = await showroom.find('// h1')
      const text = await showroom.getTextContent(helloEl)
      assert.deepEqual(text, 'Hello World ')
      // check if you can add more text after hello world
      assert.deepEqual(txt, 'Thomas')
    })
  })

  // this test block tests the rainbow attribute
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
