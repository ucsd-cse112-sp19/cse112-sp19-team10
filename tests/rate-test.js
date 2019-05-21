import { Selector } from 'testcafe'

fixture`Getting Started`
  .page`../test/core-rate.html`
// to use local file look at this https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#specifying-the-start-webpage
// Eg fixture `MyFixture`
//  .page `file:///user/my-website/index.html`;
//

test('rate component exists', async t => {
    await t
        .expect(Selector('.rate').exists).ok()
})

test('one stars', async t => {
    await t
        .click(Selector('#star1'))
        .expect(Selector('.rate').innerText).eql("1 stars");
})

test('two stars', async t => {
    await t
        .click(Selector('#star2'))
        .expect(Selector('.rate').innerText).eql("2 stars");
})

test('three stars', async t => {
    await t
        .click(Selector('#star3'))
        .expect(Selector('.rate').innerText).eql("3 stars");
})

test('four stars', async t => {
    await t
        .click(Selector('#star4'))
        .expect(Selector('.rate').innerText).eql("4 stars");
})

test('five stars', async t => {
    await t
        .click(Selector('#star5'))
        .expect(Selector('.rate').innerText).eql("5 stars");
})

