
let template = document.createElement('template')
template.innerHTML = `
    <input type="checkbox">
`

class CoreSwitch extends window.HTMLElement {

    constructor () {
        super()

        // Attach shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(template.content.cloneNode(true))
    }

    get v_model() {
        return this.hasAttribute('v-model');
    }

    set v_model(val) {
        this.setAttribute('v-model', val);
    }

    connectedCallback() {
        if (!this.hasAttribute('v-model')) {
            this.setAttribute('v-model', false);
        }
    }

    static get observedAttributes() {
        return ['v-model'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

}

window.customElements.define('core-switch', CoreSwitch)