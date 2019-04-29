const assert = require('assert').strict
const showroom = require('showroom/puppeteer')()

describe('core-hello', async => {
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

  it('should display Hello World in Spanish: Hola Mundo', async () => {
    await showroom.setAttribute('lang', 'es')
    const lang = await showroom.getAttribute('lang')
    assert.deepEqual(lang, 'es')
    const helloEl = await showroom.find('// h1')
    const text = await showroom.getTextContent(helloEl)
    assert.deepEqual(text, 'Hola Mundo ')
  })

  it('should display Hello World in Korean: 안녕하세요 세계', async () => {
    await showroom.setAttribute('lang', 'ko')
    const lang = await showroom.getAttribute('lang')
    assert.deepEqual(lang, 'ko')
    const helloEl = await showroom.find('// h1')
    const text = await showroom.getTextContent(helloEl)
    assert.deepEqual(text, '안녕하세요 세계 ')
  })

  it('should display Hello World Thomas', async () => {
    const lang = await showroom.getAttribute('lang')
    assert.deepEqual(lang, 'en')
    await showroom.setProperty('innerHTML', 'Thomas')
    const txt = await showroom.getProperty('innerHTML')
    const helloEl = await showroom.find('// h1')
    const text = await showroom.getTextContent(helloEl)
    assert.deepEqual(text, 'Hello World ')
    assert.deepEqual(txt, 'Thomas')
  })

  it('should display rainbow', async () => {
    await showroom.setAttribute('rainbow', '')
    const rainbow = await showroom.hasAttribute('rainbow')
    assert.deepEqual(rainbow, true)
    const helloEl = await showroom.find('// style')
    const text = await showroom.getTextContent(helloEl)
    console.log(text)
  })
})
