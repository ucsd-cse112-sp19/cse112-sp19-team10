import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `../test/core-rate.html`
// to use local file look at this https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#specifying-the-start-webpage
// Eg fixture `MyFixture`
//  .page `file:///user/my-website/index.html`;
//

test('rate component exists', async t => {
    await t
        .expect(Selector(() => document.querySelector('#shadow-root').exists)).ok()
})

test('one stars', async t => {
    const core_component = Selector(() => document.querySelector('core-rate'))
    const stars = Selector(() => document.querySelector('core-rate').shadowRoot.querySelector('.rate').querySelectorAll('label'))
    await t
        .click(stars.nth(0))
        .expect(core_component.textContent).eql("1 stars")
})

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

