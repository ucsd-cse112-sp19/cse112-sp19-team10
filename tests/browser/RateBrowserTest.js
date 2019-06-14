import { Selector } from 'testcafe'

fixture `rate browser test`
  .page `../../examples/rate.html`

test('rate components exists', async t => {

    // selector for all the rate components
    const rate_group = await Selector(() => document.querySelectorAll('core-rate'))
    
    // check that the first seven components exist and the total count (including the bootstrapped components)
    await t
        .expect(Selector(() => document.querySelectorAll('core-rate')[0].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[1].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[2].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[3].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[4].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[5].exists)).ok()
        .expect(Selector(() => document.querySelectorAll('core-rate')[6].exists)).ok()
        .expect(rate_group.count).eql(10)
})

test('v-model attribute', async t => {

    // selector for the rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[5])

    // selectors for each star
    const star5 = Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[0])
    const star4 = Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1])
    const star3 = Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[2])
    const star2 = Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[3])
    const star1 = Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[4])

    // click each star and expect the v-model value to be the correct value
    await t
        .expect(rate.withAttribute('v-model', '0').exists).ok()
        .click(star5)
        .expect(rate.withAttribute('v-model', '5').exists).ok()
        .click(star4)
        .expect(rate.withAttribute('v-model', '4').exists).ok()
        .click(star3)
        .expect(rate.withAttribute('v-model', '3').exists).ok()
        .click(star2)
        .expect(rate.withAttribute('v-model', '2').exists).ok()
        .click(star1)
        .expect(rate.withAttribute('v-model', '1').exists).ok()
})

test('disabled attribute', async t => {

    // selector for rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[3])

    // selector for the fourth star
    const star = await Selector(() => document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[1])

    // selector for the rate component 
    const output = await Selector(() => document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('#star5'))

    // test behavior when disabled attribute is set, then nothing about the component has been modified
    await t
        .expect(rate.getAttribute('v-model')).eql('0')
        .click(star)
        .expect(output.checked).notOk()
        .expect(rate.getAttribute('v-model')).eql('4')
})

test('low-threshold attribute', async t => {

    // selector for the rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[2])

    // selector for the first star (color red on mouse click)
    const star = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[4])
   
    // selector for the first star (color red on mouse click)
    const input1 = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('input')[4]) 

    // test to see if one of the class attributes for the sub elements in rate component contains
    // the value 'low' used to identify the low-threshold
    await t
        .click(star)
        .expect(rate.hasAttribute('low-threshold')).eql(true)
        .expect(rate.getAttribute('low-threshold')).eql('1')
        .expect(rate.getAttribute('colors')).contains('red')
        .expect(input1.getAttribute('class')).eql('low')
})

test('high-threshold attribute', async t => {

    // selector for the rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[2])

    // selector for the fifth star (color green on mouse click)
    const star = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[0])

    // selector for the input element handling the class name
    const input1 = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('input')[0])

    // test to see if one of the class attributes for the sub elements in rate component contains
    // the value 'high' used to identify the high-threshold
    await t
        .click(star)
        .expect(rate.hasAttribute('high-threshold')).eql(true)
        .expect(rate.getAttribute('high-threshold')).eql('5')
        .expect(rate.getAttribute('colors')).contains('green')
        .expect(input1.getAttribute('class')).eql('high')
})

// test to see if the style attribute contains the color which determines the colors of each star in the component
test('colors attribute', async t => {

    // selector for the first star
    const star1 = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[4])
    // selector for the third star
    const star3 = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[2])
    // selector for the fifth star
    const star5 = await Selector(() => document.querySelectorAll('core-rate')[2].shadowRoot.querySelectorAll('label')[0])

    // test to see when the specific stars are clicked, the color property value is changed to the assigned colors
    await t
        .click(star1)
        .expect(star1.getStyleProperty('color')).eql('rgb(255, 0, 0)')
        .click(star3)
        .expect(star3.getStyleProperty('color')).eql('rgb(255, 255, 0)')
        .click(star5)
        .expect(star5.getStyleProperty('color')).eql('rgb(0, 128, 0)')
})

test('void-color attribute', async t => {

    // selector for the rate component
    const star = await Selector(() => document.querySelectorAll('core-rate')[1].shadowRoot.querySelector('.rate'))

    // test to see if the style attribute contains the void-color variable which determines the set void-color for the stars
    await t
        .expect(star.getAttribute('style')).contains('void-color')
})

test('disabled-void-color attribute', async t => {

    // selector for the rate component
    const star = await Selector(() => document.querySelectorAll('core-rate')[4].shadowRoot.querySelector('.rate'))

    // test to see if a rate component with disabled attribute set contains the disabled-void-color value set in its style attribute
    await t
        .expect(star.getAttribute('style')).contains('void-color')
})

test('icon-classes attribute', async t => {

    // selector for the fifth star
    const star = await Selector(() => document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[0])

    // test to see if the label sub component, which is responsible for setting the correct icon based on its class attribute,
    // has the same value as the icon-classes attribute's value
    await t
        .expect(star.getAttribute('class')).contains("fas fa-frown")
})

test('void-icon-class attribute', async t => {

    // selector for the rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[3])

    // selector for the third star
    const star = await Selector(() => document.querySelectorAll('core-rate')[3].shadowRoot.querySelectorAll('label')[2])

    // test to see if the label sub component, which is responsible for setting the correct icon based on its class attribute,
    // has the same value as the void-icon-classes attribute's value for labels that have not been checked
    await t
        .expect(rate.getAttribute('void-icon-class')).eql("fas fa-frown")
        .click(star)
        .expect(star.getAttribute('class')).eql("fas fa-smile")
})

test('disabled-void-icon-class attribute', async t => {

    // selector for the fifth star
    const star = await Selector(() => document.querySelectorAll('core-rate')[4].shadowRoot.querySelectorAll('label')[0])

    // test to see if the label sub component, which is responsible for setting the correct icon based on its class attribute,
    // has the same value as the disabled-void-icon-classes attribute's value for labels that have not been checked
    await t
        .expect(star.getAttribute('class')).contains('fas fa-ban')
})

test('show-text and text-color attribute', async t => {

    // selctor for the rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[6])

    // selector for each of the five stars
    const star5 = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[0])
    const star4 = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[1])
    const star3 = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[2])
    const star2 = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[3])
    const star1 = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelectorAll('label')[4])

    // selector for the element that handles the text output
    const output_txt = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelector('.text'))

    // selector for the element to output the text
    const output_span = await Selector(() => document.querySelectorAll('core-rate')[6].shadowRoot.querySelector('span'))

    // test behavior when show-text attribute is set, then there should be text content from the texts attribute
    // based on which label is clicked
    await t
        .expect(rate.hasAttribute('show-text')).eql(true)
        .click(star5)
        .expect(output_txt.textContent).eql('great')
        .click(star4)
        .expect(output_txt.textContent).eql('good')
        .click(star3)
        .expect(output_txt.textContent).eql('normal')
        .click(star2)
        .expect(output_txt.textContent).eql('disappointed')
        .click(star1)
        .expect(output_txt.textContent).eql('oops')
        .expect(output_span.getStyleProperty('color')).contains('rgb(0, 128, 0)')
})

test('show-score attribute', async t => {

    // selctor for the rate component
    const rate = await Selector(() => document.querySelectorAll('core-rate')[5])

    // selector for each of the five stars
    const star5 = await Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[0])
    const star4 = await Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[1])
    const star3 = await Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[2])
    const star2 = await Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[3])
    const star1 = await Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelectorAll('label')[4])

    // selector for the element that handles the text output
    const output_txt = await Selector(() => document.querySelectorAll('core-rate')[5].shadowRoot.querySelector('.text'))

    // test behavior when show-score attribute is set, then there should be text content along with the score-template
    // attribute's value based on which label is clicked
    await t
        .expect(rate.hasAttribute('show-score')).eql(true)
        .click(star5)
        .expect(output_txt.textContent).eql('5 points')
        .click(star4)
        .expect(output_txt.textContent).eql('4 points')
        .click(star3)
        .expect(output_txt.textContent).eql('3 points')
        .click(star2)
        .expect(output_txt.textContent).eql('2 points')
        .click(star1)
        .expect(output_txt.textContent).eql('1 points')
})