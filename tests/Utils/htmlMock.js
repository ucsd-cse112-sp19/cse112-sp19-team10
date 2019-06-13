const HTMLElement = class HTMLElement {}

const document = {
  createElement: function (elem) {},
  getElementById: function (id) {}
}

const customElements = {
  define: function (a, b) {}
}

global.HTMLElement = HTMLElement
global.customElements = customElements
global.document = document

//require('../../src/core_hello.js')
//require('../../src/core_rate.js')
//require('../../src/core_switch')
