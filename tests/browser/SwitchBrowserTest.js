import { Selector } from 'testcafe'

fixture`Switch Browser Test:`
  .page`../../examples/switch.html`

  test('v-model changed from false to true and true to false after click', async t => {
    const switch1 = Selector('#switch1');
    const switch1_span = await Selector(() => document.querySelector('#switch1').shadowRoot.querySelector('label'));
    // check if the switch exist
    await t
        .expect(switch1.count).eql(1)
        .expect(switch1.exists).ok();
    // check v-model before click = false
    await t.expect(switch1.getAttribute('v-model')).eql('false');
    // perform click
    await t.click(switch1_span);
    // check if v-model value changed to true after clicking
    await t.expect(switch1.getAttribute('v-model')).eql('true');

    // check if v-model value changed back to false after clicking
    await t
        .click(switch1_span)
        .expect(switch1.getAttribute('v-model')).eql('false');
  })

  test("disabled", async t=>{
    const switch2 = Selector('#switch_disabled');
    const switch2_span = await Selector(() => document.querySelector('#switch_disabled').shadowRoot.querySelector('label'));
   
    // check if the switch exist
    await t
        .expect(switch2.count).eql(1)
        .expect(switch2.exists).ok()

    // check v-model before click = false
        await t
        .expect(switch2.getAttribute('v-model')).eql('false');

    // perform click
    await t.click(switch2_span);

    // check if v-model value doesn't change after clicking
    await t.expect(switch2.getAttribute('v-model')).eql('false');
  })

  test("named value", async t=>{
    const switch2 = Selector('#switch_named');
    const switch2_span = await Selector(() => document.querySelector('#switch_named').shadowRoot.querySelector('label'));

    await t
        // check if the switch exist
        .expect(switch2.count).eql(1)
        .expect(switch2.exists).ok()
        // check if the default v-model value is false
        .expect(switch2.getAttribute('v-model')).eql('false')
        // title should not exist before click
        .expect(switch2.hasAttribute('title')).notOk();

    // check if v-model value changed to cow and a title is added after clicking
    await t
        .click(switch2_span)
        .expect(switch2.getAttribute('v-model')).eql('cow')
        .expect(switch2.hasAttribute('title')).ok()
        .expect(switch2.getAttribute('title')).eql('Switch value: cow');
  })

  test("SwitchBrowserTest @ light up corresponding icon",async t=>{
    const switch_icon = Selector('#switch_icon');
    const switch_span = await Selector(() => document.querySelector('#switch_icon').shadowRoot.querySelector('label'));
    const switch_inactive_icon = await Selector(() => document.querySelector('#switch_icon').shadowRoot.querySelector('#inactive_icon'));
    const switch_active_icon = await Selector(() => document.querySelector('#switch_icon').shadowRoot.querySelector('#active_icon'));

    // #409EFF = rgb(64, 158, 255) == blue
    // #000000 = rgb(0, 0, 0) == black
    await t
        // check if the switch exist
        .expect(switch_icon.count).eql(1)
        .expect(switch_icon.exists).ok()
        // check if the default v-model value is false
        .expect(switch_icon.getAttribute('v-model')).eql('false')
        // check inactive icon color is blue
        .expect(switch_inactive_icon.getStyleProperty('color')).eql('rgb(64, 158, 255)')
        // check active icon color is black
        .expect(switch_active_icon.getStyleProperty('color')).eql('rgb(0, 0, 0)');

    await t
        .click(switch_span)
        .expect(switch_icon.getAttribute('v-model')).eql('true')
        // check inactive icon color is black
        .expect(switch_inactive_icon.getStyleProperty('color')).eql('rgb(0, 0, 0)')
        // check active icon color is black
        .expect(switch_active_icon.getStyleProperty('color')).eql('rgb(64, 158, 255)');
  })

  // test("SwitchBrowserTest @ light up corresponding text", async t=>{
  //   const switch_text = Selector('#switch_text');
  //   const switch_span = await Selector(() => document.querySelector('#switch_text').shadowRoot.querySelector('label'));
  //   const switch_inactive_text = await Selector(() => document.querySelector('#switch_text').shadowRoot.querySelector('#inactive_text'));
  //   const switch_active_text = await Selector(() => document.querySelector('#switch_text').shadowRoot.querySelector('#active_text'));

  //   await t
  //       // check if the switch exist
  //       .expect(switch_text.count).eql(1)
  //       .expect(switch_text.exists).ok()
  //       // check if the default v-model value is false
  //       .expect(switch_text.getAttribute('v-model')).eql('false')
  //       .expect(switch_inactive_text.textContent).eql('Left')
  //       .expect(switch_active_text.textContent).eql('Right')
  //       // check inactive text color is blue
  //       .expect(switch_inactive_text.getStyleProperty('color')).eql('rgb(64, 158, 255)')
  //       // check active text color is black
  //       .expect(switch_active_text.getStyleProperty('color')).eql('rgb(0, 0, 0)');

  //   await t
  //       .click(switch_span)
  //       .expect(switch_inactive_text.textContent).eql('Left')
  //       .expect(switch_active_text.textContent).eql('Right')
  //       // check inactive text color is black
  //       .expect(switch_inactive_text.getStyleProperty('color')).eql('rgb(0, 0, 0)')
  //       // check active text color is blue
  //       .expect(switch_active_text.getStyleProperty('color')).eql('rgb(64, 158, 255)');
  // })