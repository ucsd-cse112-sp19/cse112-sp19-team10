
let template = document.createElement('template')
template.innerHTML = `
<style>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}
  
.slider.round:before {
    border-radius: 50%;
}
</style>
<label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
</label>
`

class CoreSwitch extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  get vModel () {
    return this.hasAttribute('v-model')
  }

  set vModel (val) {
    this.setAttribute('v-model', val)
  }

  get activeValue() {
    return this.getAttribute('active-value')
  }

  set activeValue(val) {
    this.setAttribute('active-value', val)
  }

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', false)
    }
    if (!this.hasAttribute('active-value')) {
      this.setAttribute('active-value', true)
    }
  }

  static get observedAttributes () {
    return ['v-model', 'active-value']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'active-value') {
      //TODO: MAKE TOOLTIP?
      this.setAttribute('title', 'Switch value: ' + newValue)
    }
  }
}

window.customElements.define('core-switch', CoreSwitch)
