
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
    --active-color: #409EFF;
    --inactive-color: #C0CCDA;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--inactive-color);
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
    background-color: var(--active-color);
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

input[disabled] + span {
    cursor: not-allowed;
    opacity: .6;
}
</style>
<label class="switch">
    <table>
      <col width="130">
      <tr>
        <td><p id = "inactive_text"></p></td>
        <td style="width:100px"><input type="checkbox">
        <span class="slider round"></span></td>
        <td><p id = "active_text"></p></td>
      </tr>
    </table>
</label>
`


class CoreSwitch extends window.HTMLElement {
  constructor () {
    super()

    // Attach shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.content.cloneNode(true))

    // Place holder for disabled property
    this.disable = shadowRoot.querySelector('input[type=checkbox]')
    // Place holder for active-color property
    // Place holder for color
    this.aColor = shadowRoot.querySelector('.slider').style

    //this.aText = shadowRoot.querySelector('#active_text')
    //this.iaText = shadowRoot.querySelector('#inactive_text')
  }

  get disabled () {
    return this.hasAttribute('disabled')
  }

  set disabled (val) {
    if (val) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get vModel () {
    return this.hasAttribute('v-model')
  }

  set vModel (val) {
    this.setAttribute('v-model', val)
  }

  get activeColor () {
    return this.getAttribute('active-color')
  }

  set activeColor (val) {
    this.setAttribute('active-color', val)
  }

  get inactiveColor () {
    return this.getAttribute('inactive-color')
  }

  set inactiveColor (val) {
    this.setAttribute('inactive-color', val)
  }

  get activeText () {
    return this.getAttribute('active-text')
  }

  set activeText (val) {
    this.setAttribute('active-text', val)
  }

  get inactiveText () {
    return this.getAttribute('inactive-text')
  }

  set inactiveText (val) {
    this.setAttribute('inactive-text', val)
  }

  connectedCallback () {
    if (!this.hasAttribute('v-model')) {
      this.setAttribute('v-model', false)
    }
    if (!this.hasAttribute('active-color')) {
      this.setAttribute('active-color', '#409EFF')
    }
    if (!this.hasAttribute('inactive-color')) {
      this.setAttribute('inactive-color', '#C0CCDA')
    }
    if (!this.hasAttribute('active-text')) {
      this.setAttribute('active-text', '')
    }
    if (!this.hasAttribute('inactive-text')) {
      this.setAttribute('inactive-text', '')
    }
  }

  static get observedAttributes () {
    return ['v-model', 'disabled', 'active-color', 'inactive-color',
            'active-text', 'inactive-text']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const aaText = this.shadowRoot.getElementById("active_text")
    const iaText = this.shadowRoot.getElementById("inactive_text")

    if (this.hasAttribute('disabled')) {
      this.disable.disabled = true
    }
    if (this.hasAttribute('active-color')) {
      var newColor1 = this.getAttribute('active-color')
      this.aColor.setProperty('--active-color', newColor1)
    }
    if (this.hasAttribute('inactive-color')) {
      var newColor2 = this.getAttribute('inactive-color')
      this.aColor.setProperty('--inactive-color', newColor2)
    }
    if (this.hasAttribute('active-text')) {
      var activeText = this.getAttribute('active-text')
      //this.aText.innerHTML = activeText
      aaText.innerHTML = activeText
    }
    if (this.hasAttribute('inactive-text')) {
      var inactiveText = this.getAttribute('inactive-text')
      //this.aText.innerHTML = inactiveText
      iaText.innerHTML = inactiveText
    }
  }
}

window.customElements.define('core-switch', CoreSwitch)
