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
        .expect(rate_group.count).eql(6)
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

test('low-threshold attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[2]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[3]
    })
    await t
        .expect(rate.hasAttribute('low-threshold')).eql(true)
        .click(star)
        .expect(star.getStyleProperty('--colors')).within(rate.getAttribute('colors'))
})

test('high-threshold attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[2]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[1]
    })
    await t
        .expect(rate.hasAttribute('high-threshold')).eql(true)
        .click(star)
        .expect(star.getStyleProperty('--colors')).within(rate.getAttribute('colors'))
})
*/

test('colors attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[1]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains("colors:#2ed3ce")
})

test('void-color attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[1]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains("void-color:black")
})

test('disabled-void-color attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[3]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(rate.hasAttribute('disabled')).eql(true)
        .expect(star.getAttribute('style')).contains("void-color:#4286f4")
})

test('icon-classes attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[2]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(rate.hasAttribute('icon-classes')).eql(true)
        .expect(star.getAttribute('class')).eql("fas fa-smile")
})

/* TODO Coders
test('void-icon-class attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[2]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(rate.hasAttribute('icon-classes')).eql(true)
        .expect(rate.getAttribute('icon-classes')).contains('TODO: get void-icon-class value')
        .expect(star.getAttribute('style')).contains("void-icon-class:" + 'TODO: get void-icon-class value')
})

test('disabled-void-icon-class attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[3]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(rate.hasAttribute('disabled')).eql(true)
        .expect(rate.hasAttribute('icon-classes')).eql(true)
        .expect(star.getAttribute('style')).contains("disabled-void-icon-class:" + 'TODO: get disabled-void-icon-class value')
})
*/

test('show-text attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .expect(rate.hasAttribute('show-text')).eql(true)
        .click(star)
        .expect(output_txt.innerText).notEql('')
})

test('show-score attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[4]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('span')
    })
    await t
        .expect(rate.hasAttribute('show-score')).eql(true)
        .click(star)
        .expect(output_txt.innerText).notEql('')
})

test('text-color attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .expect(rate.hasAttribute('show-text')).eql(true)
        .expect(output_txt.getAttribute('style')).contains('text-color:green')
})

test('texts attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[5]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[0]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(rate.getAttribute('texts')).contains('great')
})

test('score-template attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[4]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(output_txt.innerText).contains(' points')
})