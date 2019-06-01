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
    const rate_group = await Selector(() => {
        return document.querySelectorAll('core-rate')
    })
    await t
        .expect(rate_group.count).eql(7)
})

test('v-model attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    await t
        .expect(rate.withAttribute('v-model', '0').exists).ok()
        .click(star)
        .expect(rate.withAttribute('v-model', '4').exists).ok()
})

/* TODO: when ready for review
test('max attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[0]
    })
    const labels = await Selector(() => {
        return document.querySelectorAll('core-rate')[0].shadowRoot.querySelectorAll('label')
    })    
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[0].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .click(star)
        .expect(rate.getAttribute('v-model')).notEql('5')
})
*/

test('disabled attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[1]
    })
    const output = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('#star5')
    })
    await t
        .click(star)
        .expect(output.checked).notOk()
})

/* TODO: when ready for review
test('allow-half attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[2]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[2]
    })
    const output = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('#star5')
    })
    await t
        .expect(rate.getAttribute('allow-half')).ok()
        .click(star)
        .expect(rate.getAttribute('v-model')).contains('.')
})
*/

test('low-threshold attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('input')[4]
    })
    await t
        .expect(star.getAttribute('class')).contains('low')
})

test('high-threshold attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('input')[0]
    })
    await t
        .expect(star.getAttribute('class')).contains('high')
})

test('colors attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[1]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains('color')
})

test('void-color attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains('void-color')
})

test('disabled-void-color attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains('void-color')
})

test('icon-classes attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[3]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(star.getAttribute('class')).contains("fas fa-frown")
})

test('void-icon-class attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[3]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[2]
    })
    await t
        .expect(rate.getAttribute('void-icon-class')).eql("fas fa-frown")
        .click(star)
        .expect(star.getAttribute('class')).eql("fas fa-smile")
})

test('disabled-void-icon-class attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[4]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(star.getAttribute('class')).contains('fas fa-ban')
})

test('show-text attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(output_txt.textContent).eql('good')
})

test('show-score attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(output_txt.textContent).notEql('')
})

test('text-color attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .expect(output_txt.getAttribute('style')).contains("text-color")
})

test('texts attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[6]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .click(star)
        .expect(rate.getAttribute('texts')).contains('great')
})

test('score-template attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(output_txt.innerText).contains(' points')
})