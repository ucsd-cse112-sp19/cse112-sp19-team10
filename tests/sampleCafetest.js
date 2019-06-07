import { Selector } from 'testcafe'

fixture`core hello browser test:`
  .page`../test/core-hello.html`
// to use local file look at this https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#specifying-the-start-webpage
// Eg fixture `MyFixture`
//  .page `file:///user/my-website/index.html`;
//

test('My first test @added core-hello test', async t => {
  await t
       // Use the assertion to check the first core-hello with id = test_cafe
        .expect(Selector('#test_cafe').innerText).eql('Thomas');
})
