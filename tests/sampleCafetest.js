import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;
    //to use local file look at this https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#specifying-the-start-webpage
    //Eg fixture `MyFixture`
    //  .page `file:///user/my-website/index.html`;
    //

test('My first test', async t => {
    // Test code empty for now
});