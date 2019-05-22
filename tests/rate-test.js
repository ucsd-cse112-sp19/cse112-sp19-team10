import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `../examples/rate.html`
// to use local file look at this https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#specifying-the-start-webpage
// Eg fixture `MyFixture`
//  .page `file:///user/my-website/index.html`;
//

test('rate component exists', async t => {
    await t
        .expect(Selector(() => document.querySelectorAll('core-rate')[0].exists)).ok()
})

test('core-rate count', async t => {
    const rate_group = Selector(() => {
        return document.querySelectorAll('core-rate')
    })
    await t
        .expect(rate_group.count).eql(6)
})

test('text attribute initial state', async t => {
    const output_txt = Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('span')
    })
    await t
        .expect(output_txt.innerText).eql("0 points")
})

test('text attribute new state', async t => {
    const star = Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(output_txt.innerText).eql("4 points")
})

test('show-score attribute', async t => {
    const rate = Selector(() => {
        return document.querySelectorAll('core-rate')[4]
    })
    const star = Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('span')
    })
    await t
        .expect(rate.withAttribute('show-score', '').exists).ok()
        .click(star)
        .expect(output_txt.innerText).notEql('')
})

test('v-model attribute', async t => {
    const rate = Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const star = Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .expect(rate.withAttribute('v-model', '0').exists).ok()
        .click(star)
        .expect(rate.withAttribute('v-model', '4').exists).ok()
})

test('show-text attribute', async t => {
    const rate = Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const star = Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .expect(rate.withAttribute('show-text', '').exists).ok()
        .click(star)
        .expect(output_txt.innerText).notEql('')
})

test('disable attribute', async t => {
    const star = Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('#star5')
    })
    await t
        .click(star)
        .expect(output_txt.checked).notOk()
})

/*
test('two stars', async t => {
    const core_component = Selector(() => document.querySelector('core-rate'))
    const stars = Selector(() => document.querySelector('core-rate').shadowRoot.querySelector('.rate').querySelectorAll('label'))
    await t
        .click(stars.nth(1))
        .expect(core_component.textContent).eql("2 stars")
})

test('three stars', async t => {
    const core_component = Selector(() => document.querySelector('core-rate'))
    const stars = Selector(() => document.querySelector('core-rate').shadowRoot.querySelector('.rate').querySelectorAll('label'))
    await t
        .click(stars.nth(2))
        .expect(core_component.textContent).eql("3 stars")
})

test('four stars', async t => {
    const core_component = Selector(() => document.querySelector('core-rate'))
    const stars = Selector(() => document.querySelector('core-rate').shadowRoot.querySelector('.rate').querySelectorAll('label'))
    await t
        .click(stars.nth(3))
        .expect(core_component.textContent).eql("4 stars")
})

test('five stars', async t => {
    const core_component = Selector(() => document.querySelector('core-rate'))
    const stars = Selector(() => document.querySelector('core-rate').shadowRoot.querySelector('.rate').querySelectorAll('label'))
    await t
        .click(stars.nth(4))
        .expect(core_component.innerText).eql("5 stars")
})

*/