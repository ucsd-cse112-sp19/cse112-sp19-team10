const assert = require('assert');
const showroom = require('showroom/puppeteer')();

describe('core-hello', async => {
    before(async () => {
        await showroom.start();
        // starts showroom server
    });
    
    after(async () => {
        console.log('Shutting down')
        await showroom.stop();
        // stops the showroom server
    });

    beforeEach( async () => {
        await showroom.setTestSubject('core-hello');
        await showroom.page.waitFor(150);
        // select the component with defaults from the descriptor file
    });
    
    it('should display Hello World default setting', async() =>{
        const lang = await showroom.getAttribute('lang');
        assert.equal(lang, 'en');
        const helloEl = await showroom.find('// h1');
        const text = await showroom.getTextContent(helloEl);
        assert.equal(text, 'Hello World ');
    });

    it('should display Hello World in Spanish: Hola Mundo', async() =>{
        await showroom.setAttribute('lang', 'es');
        const lang = await showroom.getAttribute('lang');
        assert.equal(lang, 'es');
        const helloEl = await showroom.find('// h1');
        const text = await showroom.getTextContent(helloEl);
        //console.log(text.length)
        assert.equal(text, 'Hola Mundo ');
    });

    it('should display Hello World in Korean: 안녕하세요 세계', async() =>{
        await showroom.setAttribute('lang', 'ko');
        const lang = await showroom.getAttribute('lang');
        assert.equal(lang, 'ko');
        const helloEl = await showroom.find('// h1');
        const text = await showroom.getTextContent(helloEl);
        assert.equal(text, '안녕하세요 세계 ');
    });

    it('should display Hello World Thomas', async() =>{
        const lang = await showroom.getAttribute('lang');
        assert.equal(lang, 'en');
        await showroom.setProperty('innerHTML','Thomas');
        const txt = await showroom.getProperty('innerHTML');
        const helloEl = await showroom.find('// h1');
        const text = await showroom.getTextContent(helloEl);
        assert.equal(text, 'Hello World');
        assert.equal(txt, 'Thomas');
    });

    it('should display rainbow', async() =>{
        await showroom.setAttribute('rainbow', '');
        const rainbow = await showroom.hasAttribute('rainbow');
        assert.equal(rainbow, true);
        const helloEl = await showroom.find('// style');
        const text = await showroom.getTextContent(helloEl);
        console.log(text);
    });
});
