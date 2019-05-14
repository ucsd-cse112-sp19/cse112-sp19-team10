
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

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    connectedCallback() {
        if (!this.hasAttribute('disabled')) {
            this.setAttribute('disabled', false);
        }
    }

    static get observedAttributes() {
        return ['v-model', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

}

window.customElements.define('core-switch', CoreSwitch)