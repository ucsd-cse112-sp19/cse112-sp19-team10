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

  it('disabled', async () => {
    await showroom.setAttribute('disabled', '')
    const disabled1 = await showroom.hasAttribute('disabled')
    assert.deepEqual(disabled, false)
    await showroom.setAttribute('disabled', true)
    const disabled2 = await showroom.hasAttribute('disabled')
    assert.deepEqual(disabled2, true)
  })

  it('allow-half attribute', async () => {
    await showroom.setAttribute('allow_half', '')
    const allow_half1 = await showroom.hasAttribute('allow_half')
    assert.deepEqual(allow_half, false)
    await showroom.setAttribute('allow_half', true)
    const allow_half2 = await showroom.hasAttribute('allow_half')
    assert.deepEqual(allow_half, true)
  })

  it('score-template attribute', async () => {
    await showroom.setAttribute('score_template', 3.7)
    const score = await showroom.getAttribute('score_template')
    assert.deepEqual(score, 3.7)
  })

  it('low-threshold attribute', async () => {
    await showroom.setAttribute('low_threshold', '')
    const low_th1 = await showroom.getAttribute('low_threshold')
    assert.deepEqual(low_th1, 2)
    await showroom.setAttribute('low_threshold', 2.5)
    const low_th2 = await showroom.getAttribute('low_threshold')
    assert.deepEqual(low_th2, 2.5)
  })

  it('high-threshold attribute', async () => {
    await showroom.setAttribute('high_threshold', '')
    const low_th1 = await showroom.getAttribute('high_threshold')
    assert.deepEqual(low_th1, 2)
    await showroom.setAttribute('high_threshold', 3.5)
    const low_th2 = await showroom.getAttribute('high_threshold')
    assert.deepEqual(low_th2, 3.5)
  })

  it('texts attribute', async () => {
    await showroom.setAttribute('texts', '')
    const texts1 = await showroom.getAttribute('texts')
    assert.deepEqual(texts1, ['oops', 'disappointed', 'normal', 'good', 'great'])
    await showroom.setAttribute('texts', ['worst', 'bad', 'okay', 'better', 'best'])
    const texts2 = await showroom.getAttribute('texts')
    assert.deepEqual(texts2, ['worst', 'bad', 'okay', 'better', 'best'])
  })

  it('colors attribute', async () => {
    await showroom.setAttribute('colors', '')
    const colors1 = await showroom.getAttribute('colors')
    assert.deepEqual(colors1, ['#F7BA2A', '#F7BA2A', '#F7BA2A'])
    await showroom.setAttribute('colors', ['#99A9BF', '#F7BA2A', '#FF9900'])
    const colors2 = await showroom.getAttribute('colors')
    assert.deepEqual(colors2, ['#99A9BF', '#F7BA2A', '#FF9900'])
  })

  it('void-color attribute', async () => {
    await showroom.setAttribute('void_color', '')
    const voidcolor1 = await showroom.getAttribute('void_color')
    assert.deepEqual(voidcolor1, '#C6D1DE')
    await showroom.setAttribute('void_color', '#D7E2EF')
    const voidcolor2 = await showroom.getAttribute('void_color')
    assert.deepEqual(voidcolor2, '#D7E2EF')
  })

  it('text-color attribute', async () => {
    await showroom.setAttribute('text_color', '')
    const textcolor1 = await showroom.getAttribute('void_color')
    assert.deepEqual(textcolor1, '#1F2D3D')
    await showroom.setAttribute('text_color', '#2A2E4E')
    const textcolor2 = await showroom.getAttribute('text_color')
    assert.deepEqual(textcolor2, '#2A2E4E')
  })

  it('show-score attribute', async () => {
    await showroom.setAttribute('show_score', '')
    const showscore1 = await showroom.hasAttribute('show_score')
    assert.deepEqual(showscore1, false)
    await showroom.setAttribute('show_score', true)
    const showscore2 = await showroom.hasAttribute('show_score')
    assert.deepEqual(showscore2, true)
  })

  it('icon-classes attribute', async () => {
    await showroom.setAttribute('icon-classes', '')
    const iconclasses1 = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(iconclasses1, ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'])
    await showroom.setAttribute('icon-classes', ['iconstar1', 'iconstar1','iconstar1'])
    const iconclasses2 = await showroom.hasAttribute('icon-classes')
    assert.deepEqual(iconclasses2, ['iconstar1', 'iconstar1','iconstar1'])
  })

  it('disabled-void-icon-class attribute', async () => {
    await showroom.setAttribute('disabled_void_icon_class', '')
    const disabledvoidiconclass1 = await showroom.hasAttribute('disabled_void_icon_class')
    assert.deepEqual(disabledvoidiconclass1, 'el-icon-star-on')
    await showroom.setAttribute('disabled_void_icon_class', 'iconstar1')
    const disabledvoidiconclass2 = await showroom.hasAttribute('disabled_void_icon_class')
    assert.deepEqual(disabledvoidiconclass2, 'iconstar1')
  })

  it('show-text attribute', async () => {
    await showroom.setAttribute('show_text', '')
    const showtext1 = await showroom.hasAttribute('show_text')
    assert.deepEqual(showtext1, false)
    await showroom.setAttribute('show_text', true)
    const showtext2 = await showroom.hasAttribute('show_text')
    assert.deepEqual(showtext2, true)
  })

  it('disabled-void-color attribute', async () => {
    await showroom.setAttribute('disabled_void_color', '')
    const disabledvoidcolor1 = await showroom.getAttribute('disabled_void_color')
    assert.deepEqual(disabledvoidcolor1, '#EFF2F7')
    await showroom.setAttribute('disabled_void_color', '#FAA3A8')
    const disabledvoidcolor2 = await showroom.getAttribute('disabled_void_color')
    assert.deepEqual(disabledvoidcolor2, '#FAA3A8')
  })
})
