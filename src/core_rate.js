let template = document.createElement('template')
template.innerHTML = ` 

`
class CoreRate extends window.HTMLElement {

    constructor () {
        super()

        // Attach shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(template.content.cloneNode(true))
    }

    get v_model() {
        return this.getAttribute('v-model');
    }

    set v_model(val) {
        this.setAttribute('v-model', val);
    }

    get max() {
        return this.getAttribute('max');
    }

    set max(val) {
        this.setAttribute('max', val);
    }

    connectedCallback() {
        if (!this.hasAttribute('v-model')) {
            this.setAttribute('v-model', 0);
        }
        if (!this.hasAttribute('max')) {
            this.setAttribute('max', 5)
        }
    }

    static get observedAttributes() {
        return ['v-model'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

}

window.customElements.define('core-rate', CoreRate)