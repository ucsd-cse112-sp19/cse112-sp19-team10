import { Selector } from 'testcafe'

fixture`switch browser test:`
  .page`../examples/switch.html`

  test('SwitchBrowserTest @ v-model changed from false to true and true to false after click', async t => {
    const switch1 = Selector('#switch1');
    const switch1_span = await Selector(() => document.querySelector('#switch1').shadowRoot.querySelector('span'));
    // check if the switch exist
    await t
        .expect(switch1.count).eql(1)
        .expect(switch1.exists).ok();
    // check v-model before click = false
    await t.expect(switch1.getAttribute('v-model')).eql('false');
    //perform click
    await t.click(switch1_span);
    //check after click
    await t.expect(switch1.getAttribute('v-model')).eql('true');

    await t
        .click(switch1_span)
        .expect(switch1.getAttribute('v-model')).eql('false');
  })

  test("SwitchBrowserTest @ disabled", async t=>{
    const switch2 = Selector('#switch_disabled');
    const switch2_span = await Selector(() => document.querySelector('#switch_disabled').shadowRoot.querySelector('span'));

    await t
        .expect(switch2.count).eql(1)
        .expect(switch2.exists).ok()
        .expect(switch2.getAttribute('v-model')).eql('false');

    await t.click(switch2_span);
    await t.expect(switch2.getAttribute('v-model')).eql('false');
  })

  test("SwitchBrowserTest @ named value",async t=>{
    const switch2 = Selector('#switch_named');
    const switch2_span = await Selector(() => document.querySelector('#switch_named').shadowRoot.querySelector('span'));

    await t
        .expect(switch2.count).eql(1)
        .expect(switch2.exists).ok()
        .expect(switch2.getAttribute('v-model')).eql('false')
        .expect(switch2.hasAttribute('title')).notOk();//title should not exist before click
    await t
        .click(switch2_span)
        .expect(switch2.getAttribute('v-model')).eql('cow')
        .expect(switch2.hasAttribute('title')).ok()
        .expect(switch2.getAttribute('title')).eql('Switch value: cow');
  })