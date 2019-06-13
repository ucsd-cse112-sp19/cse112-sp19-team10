import { Selector } from 'testcafe'

fixture`tooltip browser test:`
  .page`../../examples/tooltip.html`

  test('v-model changed from false to true and true to false after hover and click', async t => {
    const tooltip1 = Selector('#cow');
    const tooltip1_div = await Selector(() => document.querySelector('#cow').shadowRoot.querySelector('.tooltip'));
    const tooltip1_span = await Selector(() => document.querySelector('#cow').shadowRoot.querySelector('#tooltiptext'));

    // check if the tooltip exists
    await t
        .expect(tooltip1.count).eql(1)
        .expect(tooltip1.exists).ok();
    
    // check v-model before hover
    await t
        .expect(tooltip1.hasAttribute('v-model')).eql(false);
    
    // hover mouse on the text, check if v-model is set and opacity property set to 1
    await t
        .hover(tooltip1_div)
        .expect(tooltip1.hasAttribute('v-model')).eql(true)
        .expect(tooltip1_span.getStyleProperty('opacity')).contains('1');

    // perform click, expect tooltip to be hidden
    await t
        .click(tooltip1_div)
        .expect(tooltip1.hasAttribute('v-model')).eql(false)
        .expect(tooltip1_span.getStyleProperty('opacity')).contains('0');
  })


  test("disabled on mouse hover and click", async t => {
    const tooltip2 = Selector('#disabled');
    const tooltip2_div = await Selector(() => document.querySelector('#disabled').shadowRoot.querySelector('.tooltip'));
    const tooltip2_span = await Selector(() => document.querySelector('#disabled').shadowRoot.querySelector('#tooltiptext'));

    // check v-model before performing a mouse hover and click
    await t
        .expect(tooltip2.count).eql(1)
        .expect(tooltip2.exists).ok()
        .expect(tooltip2.hasAttribute('v-model')).eql(false);

    // make sure that v-model is was not set and the opacity property was not set on hover
    await t
        .hover(tooltip2_div)
        .expect(tooltip2.hasAttribute('v-model')).eql(false)
        .expect(tooltip2_span.getStyleProperty('opacity')).eql('0');

    // make sure that v-model is was not set and the opacity property was not set on click
    await t
        .click(tooltip2_div)
        .expect(tooltip2.hasAttribute('v-model')).eql(false)
        .expect(tooltip2_span.getStyleProperty('opacity')).eql('0');
  })

  test("content value matches the textContent, check that changed effect is light",async t=>{
    const tooltip2 = Selector('#light');
    const tooltip2_div = await Selector(() => document.querySelector('#cow').shadowRoot.querySelector('.tooltip'));
    const tooltip2_span = await Selector(() => document.querySelector('#light').shadowRoot.querySelector('#tooltiptext'));

    // check v-model before performing a mouse hover and click
    await t
        .expect(tooltip2.count).eql(1)
        .expect(tooltip2.exists).ok();

    // check content value to equal the textContent in the tooltip
    await t
        .expect(tooltip2.getAttribute('content')).eql('light')
        .expect(tooltip2_span.textContent).contains('light');

    // check the tooltip theme to match the value of background color of the tooltip
    await t
        .hover(tooltip2_div)
        .expect(tooltip2.getAttribute('effect')).eql('light')
        .expect(tooltip2_span.getStyleProperty('background-color')).eql('rgb(255, 255, 255)');
  })

  /*
  test("check default effect and not enterable test",async t=>{
    const tooltip3 = Selector('#not_enterable');
    const tooltip3_div = await Selector(() => document.querySelector('#not_enterable').shadowRoot.querySelector('.tooltip'));
    const tooltip3_span = await Selector(() => document.querySelector('#not_enterable').shadowRoot.querySelector('#tooltiptext'));

    // check if tooltip component exists and check if the effect is correct default color value
    await t
        .expect(tooltip3.count).eql(1)
        .expect(tooltip3.exists).ok()
        .expect(tooltip3.hasAttribute('effect')).eql(false)
        .expect(tooltip3_span.getStyleProperty('background-color')).eql('rgb(48, 49, 51)');

    // test when hovering to text then tooltip shows and after hover to the tooltip, it disappears
    await t
        .hover(tooltip3_div)
        .wait(50)
        .expect(tooltip3_span.getStyleProperty('opacity')).eql('1')
        .expect(tooltip3.hasAttribute('v-model')).eql(true)
        .hover(tooltip3_span)
        .expect(tooltip3_span.getStyleProperty('opacity')).eql('0');
  })
  */

  /*
  test("open-delay test and check if opacity property value changes from 0 to 1 after delay",async t=>{
    const tooltip4 = Selector('#he');
    const tooltip4_div = await Selector(() => document.querySelector('#he').shadowRoot.querySelector('.tooltip'));
    const tooltip4_span = await Selector(() => document.querySelector('#he').shadowRoot.querySelector('#tooltiptext'));
    const tooltip4_div2 = await Selector(() => document.querySelector('#cow').shadowRoot.querySelector('.tooltip'));


    // check if tooltip comoponent exists with its effect having the correct default value
    await t
        .expect(tooltip4.count).eql(1)
        .expect(tooltip4.exists).ok()
        .expect(tooltip4.hasAttribute('effect')).eql(false)
        .expect(tooltip4_span.getStyleProperty('background-color')).eql('rgb(48, 49, 51)');

    // check if the open-delay value is converted to the correct transition-delay value
    await t
        .expect(tooltip4.hasAttribute('open-delay')).eql(true)
        .expect(tooltip4.getAttribute('open-delay')).eql('3000')
        .expect(tooltip4_span.getStyleProperty('transition-delay')).eql('3s');

    // hover on text, wait 3.05 seconds and check if the v-model was set and opacity was set to 1,
    // then hover out and check if the v-model is false and its opacity set to 0
    await t
        .hover(tooltip4_div)
        .wait(3050)
        .expect(tooltip4.hasAttribute('v-model')).eql(true)
        .expect(tooltip4_span.getStyleProperty('opacity')).eql('1')
        .hover(tooltip4_div2)
        .wait(50)
        .expect(tooltip4.hasAttribute('v-model')).eql(false)
        .expect(tooltip4_span.getStyleProperty('opacity')).eql('0');
  })

  test("manual attribute using a button to display tooltip when clicked and when clicked again it disappears",async t=>{
    const tooltip5 = Selector('#manual');
    const tooltip5_btn = Selector('#manual').querySelector('button');
    const tooltip5_span = await Selector(() => document.querySelector('#manual').shadowRoot.querySelector('#tooltiptext'));

    // check if tooltip comoponent exists with its effect having the correct default value
    await t
        .expect(tooltip5.count).eql(1)
        .expect(tooltip5.exists).ok();

    // check v-model and opacity values set correctly when clickinsg the button
    await t
        .expect(tooltip5.hasAttribute('manual')).eql(true)
        .expect(tooltip5.hasAttribute('v-model')).eql(false)
        .expect(tooltip5_span.getStyleProperty('opacity')).eql('0')
        .click(tooltip5_btn)
        .expect(tooltip5.hasAttribute('v-model')).eql(true)
        .expect(tooltip5_span.getStyleProperty('opacity')).eql('1')
        .click(tooltip5_btn)
        .expect(tooltip5.hasAttribute('v-model')).eql(false)
        .expect(tooltip5_span.getStyleProperty('opacity')).eql('0');
  })
  */