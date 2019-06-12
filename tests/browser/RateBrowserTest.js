import { Selector } from 'testcafe'

fixture `rate browser test`
  .page `../../examples/rate.html`

// check if all seven components exist
test('rate components exists', async t => {
    await t
        .expect(Selector(() => document.querySelectorAll('core-rate')[0].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[1].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[2].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[3].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[4].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[5].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[6].exists)).ok()
})

// check there is a total of seven core-rate components
test('core-rate count', async t => {
    const rate_group = await Selector(() => {
        return document.querySelectorAll('core-rate')
    })
    await t
        .expect(rate_group.count).eql(7)
})

// test behavior is expected when the fourth star is clicked, then v-model value is changed from 0 to 4
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

// test behavior when disabled attribute is set, then nothing about the component has been modified
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

// test to see if one of the class attributes for the sub elements in rate component contains the value 'low' used to identify the low-threshold
test('low-threshold attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('input')[4]
    })
    await t
        .expect(star.getAttribute('class')).contains('low')
})

// test to see if one of the class attributes for the sub elements in rate component contains the value 'high' used to identify the high-threshold
test('high-threshold attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('input')[0]
    })
    await t
        .expect(star.getAttribute('class')).contains('high')
})

// test to see if the style attribute contains the color which determines the colors of each star in the component
test('colors attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains('color')
})

// test to see if the style attribute contains the void-color variable which determines the set void-color for the stars
test('void-color attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains('void-color')
})

// test to see if a rate component with disabled attribute set contains the disabled-void-color value set in its style attribute
test('disabled-void-color attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('.rate')
    })
    await t
        .expect(star.getAttribute('style')).contains('void-color')
})

// test to see if the label sub component, which is responsible for setting the correct icon based on its class attribute,
// has the same value as the icon-classes attribute's value
test('icon-classes attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(star.getAttribute('class')).contains("fas fa-frown")
})

// test to see if the label sub component, which is responsible for setting the correct icon based on its class attribute,
// has the same value as the void-icon-classes attribute's value for labels that have not been checked
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

// test to see if the label sub component, which is responsible for setting the correct icon based on its class attribute,
// has the same value as the disabled-void-icon-classes attribute's value for labels that have not been checked
test('disabled-void-icon-class attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[0]
    })
    await t
        .expect(star.getAttribute('class')).contains('fas fa-ban')
})

// test behavior when show-text attribute is set, then there should be text content from the texts attribute based on which label is clicked
test('show-text attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .click(star)
        .expect(output_txt.textContent).eql('good')
})

// test behavior when show-score attribute is set, then there should be text content along with the score-template
// attribute's value based on which label is clicked
test('show-score attribute', async t => {
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1]
    })
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .click(star)
        .expect(output_txt.textContent).contains(' points')
})

// test to see that when the text-score color attribute is set, then the text-color should be contained in span element's style attribute
test('text-color attribute', async t => {
    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('span')
    })
    await t
        .expect(output_txt.getAttribute('style')).contains("text-color")
})

// test to see if the texts attribute contains the expected text content and that text content is displayed
test('texts attribute', async t => {
    const rate = await Selector(() => {
        return document.querySelectorAll('core-rate')[6]
    })
    const star = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[0]
    })

    const output_txt = await Selector(() => {
        return document.querySelectorAll('core-rate')[6].shadowRoot.querySelector('span')
    })

    await t
        .click(star)
        .expect(rate.getAttribute('texts')).contains('great')
        .expect(output_txt.textContent).eql('great')
})

// test to see that text content output contains the score-template value
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